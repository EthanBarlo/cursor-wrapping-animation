'use client';
import WrapCursorOnHover from '@/Motion/WrapCursorOnHover';
import useWrapCursorOnHover from '@/hooks/useWrapCursorOnHover';

export default function Home() {
  const wrapCursorRef = useWrapCursorOnHover();

  return (
    <main className="h-screen flex gap-12 bg-slate-600 w-full items-center justify-center p-6">
      {/* This button uses a hook to wrap when you need more control */}
      <button
        ref={wrapCursorRef as any}
        className=" text-white bg-black px-6 py-3 rounded-md ring-1 ring-white/40 shadow"
      >
        Click Me
      </button>

      {/* This is just a tad bit easier to use, that using the hook directly */}
      <WrapCursorOnHover className="">
        <a href="#">
          <div className="max-w-md p-6 space-y-3 bg-slate-800 text-white rounded-xl  shadow-lg">
            <h1 className="text-2xl">Heading</h1>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              voluptatum consequatur porro velit consectetur iste? Rerum
              perspiciatis voluptatem quo ex cupiditate quae reprehenderit
              corporis? Quod minima excepturi blanditiis ratione in.
            </p>
          </div>
        </a>
      </WrapCursorOnHover>
    </main>
  );
}
