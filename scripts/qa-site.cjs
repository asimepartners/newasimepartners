// Browser acceptance checks. Uses an isolated profile and mocks enquiry delivery.
const assert=require('node:assert/strict');const fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'/Users/macbook/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const base=process.env.QA_BASE_URL||'http://localhost:5174';
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>localStorage.setItem('jaza-cookie-consent','necessary'));
 const pages=process.env.QA_PAGES?.split(',')||fs.readdirSync('.').filter(x=>x.endsWith('.html'));
 const links=new Set();const failures=[];
 for(const [index,file] of pages.entries()){
  if(index%10===0)console.log(`Checking pages ${index+1}–${Math.min(index+10,pages.length)} of ${pages.length}`)
  await page.goto(`${base}/${file}`,{waitUntil:'domcontentloaded'});
  await page.locator('h1').waitFor();
  const h1=await page.locator('h1').count();if(h1!==1)failures.push(`${file}: ${h1} h1 headings`);
  if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))failures.push(`${file}: desktop overflow`);
  for(const link of await page.locator('a[href]').evaluateAll(xs=>xs.map(x=>x.getAttribute('href'))))if(link.startsWith('/')&&!link.startsWith('//'))links.add(link);
  await page.setViewportSize({width:390,height:844});
  if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))failures.push(`${file}: mobile overflow`);
  await page.setViewportSize({width:1440,height:1000});
 }
 for(const href of links){const path=decodeURIComponent(href.split(/[?#]/)[0]);if(path!=='/'&&!fs.existsSync(path.slice(1))&&!fs.existsSync(`public${path}`))failures.push(`Missing link target: ${href}`)}
 await page.goto(`${base}/work.html`);
 await page.getByRole('button',{name:'Fund Managers',exact:true}).click();assert.equal(await page.locator('.ap-image-card').count(),2);
 await page.getByRole('searchbox',{name:'Search'}).fill('no-match-123');await page.getByText('No published items match these filters.').waitFor();
 await page.getByRole('button',{name:'Clear filters'}).click();assert.equal(await page.locator('.ap-image-card').count(),6);
 await page.goto(`${base}/`);await page.setViewportSize({width:390,height:844});
 await page.getByRole('button',{name:'Menu ☰'}).click();assert.equal(await page.getByRole('dialog',{name:'Site navigation'}).isVisible(),true);
 await page.screenshot({path:'/tmp/asime-mobile-menu.png'});await page.keyboard.press('Escape');assert.equal(await page.getByRole('button',{name:'Menu ☰'}).getAttribute('aria-expanded'),'false');
 await page.locator('.ap-hero-tabs').getByRole('link',{name:'02 For Fund Managers'}).click();await page.getByRole('heading',{name:'Become institutional-grade.'}).waitFor();assert.match(page.url(),/fund-managers/);
 // Consent gates the analytics adapter; no analytics requests are sent.
 await page.goto(`${base}/`);
 await page.evaluate(()=>{document.addEventListener('click',e=>e.preventDefault());document.querySelector('a[href="/contact.html"]').click()});
 assert.equal(await page.evaluate(()=>window.dataLayer?.length||0),0);
 await page.evaluate(()=>{localStorage.setItem('jaza-cookie-consent','accepted');document.querySelector('a[href="/contact.html"]').click()});
 assert.equal(await page.evaluate(()=>window.dataLayer?.at(-1)?.event),'cta_click');
 // Form success and failure: no real message is transmitted.
 await page.goto(`${base}/contact.html?interest=GP%20Academy`);
 await page.evaluate(()=>window.grecaptcha={ready:cb=>cb(),execute:async()=>'test-token'});
 assert.equal(await page.locator('[name=interest]').inputValue(),'GP Academy');
 let payload;await page.route('**/api/contact',async route=>{payload=route.request().postDataJSON();await route.fulfill({status:200,contentType:'application/json',body:'{"success":true}'})});
 async function fill(){await page.locator('[name=name]').fill('QA test');await page.locator('[name=email]').fill('qa@example.com');await page.locator('[name=organisation]').fill('QA institution');await page.locator('[name=audience]').selectOption('Fund Manager');await page.locator('[name=interest]').fill('GP Academy');await page.locator('[name=message]').fill('Local mocked browser verification.');}
 await fill();await page.getByRole('button',{name:'Submit',exact:true}).click();await page.getByRole('heading',{name:'Message sent'}).waitFor();assert.match(payload.message,/GP Academy/);assert.match(payload.message,/QA institution/);await page.getByRole('button',{name:'Close',exact:true}).last().click();
 await page.unroute('**/api/contact');await page.route('**/api/contact',route=>route.fulfill({status:500,contentType:'application/json',body:'{"success":false}'}));await fill();await page.getByRole('button',{name:'Submit',exact:true}).click();await page.getByRole('alert').waitFor();assert.equal(await page.locator('[name=message]').inputValue(),'Local mocked browser verification.');
 await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:'/tmp/asime-mobile-contact.png',fullPage:true});
 await page.goto(`${base}/`);
 for(const width of [1440,768,390]){
  await page.setViewportSize({width,height:width===1440?1000:844});
  await page.evaluate(async()=>{for(const img of document.images){img.loading='eager';await img.decode().catch(()=>{})}});
  const broken=await page.locator('img').evaluateAll(xs=>xs.filter(x=>!x.naturalWidth).map(x=>x.src));if(broken.length)failures.push(`Broken images: ${broken}`);
  await page.screenshot({path:`/tmp/asime-home-${width}.png`,fullPage:true});await page.screenshot({path:`/tmp/asime-hero-${width}.png`});
 }
 console.log(JSON.stringify({pagesChecked:pages.length,internalLinksChecked:links.size,errors,failures,checks:['desktop/mobile overflow','heading structure','internal routes','work filters and empty states','mobile menu and Escape','hero audience navigation','prefilled enquiry','mocked enquiry success and failure','image delivery']},null,2));
 await browser.close();assert.deepEqual(errors,[]);assert.deepEqual(failures,[]);
})().catch(e=>{console.error(e);process.exit(1)})
