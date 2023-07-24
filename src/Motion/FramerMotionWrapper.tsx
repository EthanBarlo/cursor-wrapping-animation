"use client";
import { LazyMotion, domAnimation } from "framer-motion";

interface FramerMotionWrapper {
	children: React.ReactNode;
}
export default function FramerMotionWrapper({ children }: FramerMotionWrapper) {
	return (
		<LazyMotion features={domAnimation} strict>
			{children}
		</LazyMotion>
	);
}
