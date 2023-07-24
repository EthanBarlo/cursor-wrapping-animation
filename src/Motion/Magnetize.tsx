"use client";
import { m, useSpring } from "framer-motion";
import { useMotionMouse_WriteOnly } from "./Mouse/atoms";
import { useRef, useState } from "react";

interface MotionMagnetize {
	children: React.ReactNode;
}
export default function MotionMagnetize({ children }: MotionMagnetize) {
	const [_, setMotionMouse] = useMotionMouse_WriteOnly();
	const ref = useRef<HTMLDivElement>(null);
	const [isHovering, setIsHovering] = useState(false);

	const [childLocation, setChildLocation] = useState<{ x?: number; y?: number }>();

	function setElementToFixedPos() {
		const bounds = ref.current?.getBoundingClientRect();
		setChildLocation({
			x: bounds?.x,
			y: bounds?.y,
		});
		setIsHovering(true);
	}

	const magnetize_x = useSpring(0);
	const magnetize_y = useSpring(0);

	return (
		<div ref={ref} className="relative">
			<div className="absolute -z-10 w-[calc(100%_+_64px)] h-[calc(100%_+_64px)] -top-[32px] -left-[32px] border border-red-500"></div>

			<m.div
				className={isHovering ? "opacity-0" : ""}
				onMouseEnter={() => {
					setMotionMouse({ target: ref.current as HTMLDivElement });
					setElementToFixedPos();
				}}
				onMouseLeave={() => {
					setMotionMouse({});
					setTimeout(() => setIsHovering(false), 350);
				}}>
				{children}
			</m.div>

			{/* Clone thats at the top z Level */}
			{isHovering && (
				<div
					className="fixed pointer-events-none z-50"
					style={{
						top: childLocation?.y,
						left: childLocation?.x,
					}}>
					{children}
				</div>
			)}
		</div>
	);
}
