import { useEffect } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";



const SPRING = { stiffness: 150, damping: 18, mass: 0.4 };

// Returns the pointer position within an element as -0.5..0.5 on both axes.
export function usePointerOffset({ disabled = false } = {}) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const reset = () => {
    offsetX.set(0);
    offsetY.set(0);
  };

  const onPointerMove = (event) => {
    // Touch and pen get nothing — there is no hover state to respond to.
    if (disabled || (event.pointerType && event.pointerType !== "mouse")) return;
    const rect = event.currentTarget.getBoundingClientRect();
    offsetX.set((event.clientX - rect.left) / rect.width - 0.5);
    offsetY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return {
    offsetX,
    offsetY,
    bind: { onPointerMove, onPointerLeave: reset, onBlur: reset },
  };
}


export function useWindowPointerOffset({ disabled = false } = {}) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  useEffect(() => {
    if (disabled) return;
    // Coarse pointers have no hover, so there is nothing to track.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (event) => {
      offsetX.set(event.clientX / window.innerWidth - 0.5);
      offsetY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [disabled, offsetX, offsetY]);

  return { offsetX, offsetY };
}

// 3D tilt. Spread `bind` on the element you pass `rotateX`/`rotateY` to.
export function useTilt({ max = 7, disabled = false } = {}) {
  const { offsetX, offsetY, bind } = usePointerOffset({ disabled });
  const rotateY = useSpring(useTransform(offsetX, [-0.5, 0.5], [-max, max]), SPRING);
  const rotateX = useSpring(useTransform(offsetY, [-0.5, 0.5], [max, -max]), SPRING);
  return { rotateX, rotateY, ...bind };
}

// Element leans toward the cursor, capped so it never detaches from its slot.
export function useMagnetic({ max = 8, disabled = false } = {}) {
  const { offsetX, offsetY, bind } = usePointerOffset({ disabled });
  const x = useSpring(useTransform(offsetX, [-0.5, 0.5], [-max, max]), SPRING);
  const y = useSpring(useTransform(offsetY, [-0.5, 0.5], [-max, max]), SPRING);
  return { x, y, ...bind };
}


export function useParallaxLayer(
  offsetX,
  offsetY,
  { strength = 10, invert = false } = {}
) {
  const range = invert ? [strength, -strength] : [-strength, strength];
  const x = useSpring(useTransform(offsetX, [-0.5, 0.5], range), SPRING);
  const y = useSpring(useTransform(offsetY, [-0.5, 0.5], range), SPRING);
  return { x, y };
}
