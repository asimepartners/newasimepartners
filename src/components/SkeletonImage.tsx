import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react';
import './skeleton.css';

type Props = ImgHTMLAttributes<HTMLImageElement>;

function ImageFrame({ className = '', onLoad, onError, fetchPriority, ...props }: Props) {
  const image = useRef<HTMLImageElement>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading');
  useEffect(() => {
    const element = image.current;
    if (element?.complete) setState(element.naturalWidth ? 'ready' : 'error');
  }, []);
  return <img {...props} {...(fetchPriority ? { fetchpriority: fetchPriority } : {})} ref={image}
    className={`${className} ap-image-frame ap-image-${state}`}
    aria-busy={state === 'loading' ? true : undefined}
    onLoad={event => { setState('ready'); onLoad?.(event); }}
    onError={event => { setState('error'); onError?.(event); }} />;
}

// A new source gets its own loading state; cached images settle immediately.
export default function SkeletonImage(props: Props) {
  return <ImageFrame key={`${props.src}|${props.srcSet}`} {...props} />;
}
