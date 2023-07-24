import { MotionValue } from "framer-motion";
import { atom } from "jotai";
import { useAtom } from "jotai/react";

interface MotionMouse {
	size?: number;
	target?: HTMLDivElement;
	magnetize?: {
		x: MotionValue<number>;
		y: MotionValue<number>;
	};
}

const MotionMouseAtom = atom<MotionMouse>({});
const MotionMouse_WriteOnlyAtom = atom(null, (get, set, update: MotionMouse) => {
	set(MotionMouseAtom, update);
});

export const useMotionMouse = () => useAtom(MotionMouseAtom);
export const useMotionMouse_WriteOnly = () => useAtom(MotionMouse_WriteOnlyAtom);
