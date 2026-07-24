import { writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import DottedMap from 'dotted-map'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public', 'images')
mkdirSync(publicDir, { recursive: true })

// Crop out Antarctica / far south so the map reads cleanly like the reference.
const map = new DottedMap({
  height: 54,
  grid: 'diagonal',
  region: { lat: { min: -56, max: 74 }, lng: { min: -170, max: 190 } },
})

const svg = map.getSVG({
  radius: 0.35,
  color: '#8B95A5',
  shape: 'circle',
  backgroundColor: 'transparent',
})

writeFileSync(join(publicDir, 'dotted-world.svg'), svg)

const viewBoxMatch = svg.match(/viewBox="([^"]+)"/)
const [, , vbW, vbH] = viewBoxMatch[1].split(' ').map(Number)

const locations = [
  { key: 'ghana', label: 'Ghana', color: '#F5A623', lat: 5.6, lng: -0.19 },
  { key: 'kenya', label: 'Kenya', color: '#3FB53F', lat: -1.29, lng: 36.82 },
  { key: 'luxemburg', label: 'Luxemburg', color: '#3B7DED', lat: 49.61, lng: 6.13 },
  { key: 'us', label: 'US', color: '#F0403D', lat: 39.5, lng: -98.35 },
  { key: 'southafrica', label: 'South Africa', color: '#3FD4E8', lat: -26.2, lng: 28.04 },
  { key: 'togo', label: 'Togo', color: '#9B5DE5', lat: 6.13, lng: 1.22 },
]

const pins = locations.map((loc) => {
  const pin = map.getPin({ lat: loc.lat, lng: loc.lng })
  return {
    key: loc.key,
    label: loc.label,
    color: loc.color,
    left: +((pin.x / vbW) * 100).toFixed(2),
    top: +((pin.y / vbH) * 100).toFixed(2),
  }
})

console.log('viewBox W/H:', vbW, vbH)
console.log(JSON.stringify(pins, null, 2))
