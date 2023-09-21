'use client';

import useWrapCursorOnHover from '@/hooks/useWrapCursorOnHover';
import { HTMLAttributes } from 'react';

interface IWrapCursorOnHover extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export default function WrapCursorOnHover({
  children,
  ...rest
}: IWrapCursorOnHover) {
  const ref = useWrapCursorOnHover();

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
}
