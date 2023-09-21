'use client';
import { SpringOptions, m, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { useMotionMouse } from './atoms';

export default function MotionMouse() {
  const [MouseState, setMouseState] = useMotionMouse();
  const springOptions: SpringOptions = {
    damping: 30,
    stiffness: 300,
    bounce: 0,
    duration: 10,
  };
  const mouse_x = useSpring(0, springOptions);
  const mouse_y = useSpring(0, springOptions);

  const width = useSpring(30, springOptions);
  const height = useSpring(30, springOptions);
  const borderRadius = useSpring(width.get(), springOptions);

  // This effect is what makes the cursor follow the mouse
  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      // Dont move is the target is set
      if (MouseState.target) return;

      let { clientX, clientY } = event;

      // Move to center of cursor
      clientX = clientX - 12.5;
      clientY = clientY - 12.5;

      mouse_x.set(clientX);
      mouse_y.set(clientY);
      width.set(25);
      height.set(25);
      borderRadius.set(25);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [MouseState]);

  // This effect will set the target
  useEffect(() => {
    if (MouseState.target) {
      const targetBounds = MouseState.target.getBoundingClientRect();

      mouse_x.set(targetBounds.x - 16);
      mouse_y.set(targetBounds.y - 16);

      width.set(targetBounds.width + 32);
      height.set(targetBounds.height + 32);

      borderRadius.set(12);
    }
  }, [MouseState]);

  return (
    <m.div
      className="fixed z-30 top-1/2 origin-center  left-1/2 bg-slate-50/5 ring-1 ring-white/10 shadow pointer-events-none"
      style={{
        top: mouse_y,
        left: mouse_x,
        width,
        height,
        borderRadius,
      }}
    ></m.div>
  );
}
