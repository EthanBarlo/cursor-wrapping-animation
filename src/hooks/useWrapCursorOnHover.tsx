import { useMotionMouse_WriteOnly } from '@/Motion/Mouse/atoms';
import { ElementRef, useEffect, useRef } from 'react';

export default function useWrapCursorOnHover() {
  const ref = useRef<ElementRef<'div'>>(null);
  const [_, setMotionMouse] = useMotionMouse_WriteOnly();

  useEffect(() => {
    if (!ref.current) return;

    const onEnter = () => setMotionMouse({ target: ref.current });
    const onLeave = () => setMotionMouse({});

    ref.current.addEventListener('mouseenter', onEnter);
    ref.current.addEventListener('mouseleave', onLeave);

    return () => {
      if (!ref.current) return;
      ref.current.removeEventListener('mouseenter', onEnter);
      ref.current.removeEventListener('mouseleave', onLeave);
    };
  }, [ref.current]);

  return ref;
}
