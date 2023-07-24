import MotionMagnetize from "@/Motion/Magnetize";
import Image from "next/image";

export default function Home() {
	return (
		<main className="h-screen flex gap-12 bg-slate-600 w-full items-center justify-center p-6">
			<MotionMagnetize>
				<button className=" text-white bg-black px-6 py-3 rounded-md ring-1 ring-white/40 shadow">
					Click Me
				</button>
			</MotionMagnetize>

			<MotionMagnetize>
				<a href="#">
					<div className="max-w-md p-6 space-y-3 bg-slate-800 text-white rounded-xl  shadow-lg">
						<h1 className="text-2xl">Heading</h1>
						<p className="text-sm">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat voluptatum consequatur
							porro velit consectetur iste? Rerum perspiciatis voluptatem quo ex cupiditate quae
							reprehenderit corporis? Quod minima excepturi blanditiis ratione in.
						</p>
					</div>
				</a>
			</MotionMagnetize>
		</main>
	);
}
