import { useMotionValue, useSpring, useTransform } from "framer-motion";

// Mouse-follow 3D tilt. Returns motion values for `style` plus the pointer
// handlers to spread on the element being tilted.
//
// Motion values are written outside React, so tracking the pointer costs zero
// re-renders and the transform stays on the compositor.
export function useTilt({ max = 7, disabled = false } = {}) {
  const offsetX = useMotionValue(0); // -0.5 (left) .. 0.5 (right)
  const offsetY = useMotionValue(0); // -0.5 (top)  .. 0.5 (bottom)

  const spring = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateY = useSpring(useTransform(offsetX, [-0.5, 0.5], [-max, max]), spring);
  const rotateX = useSpring(useTransform(offsetY, [-0.5, 0.5], [max, -max]), spring);

  const reset = () => {
    offsetX.set(0);
    offsetY.set(0);
  };

  const onPointerMove = (event) => {
    // Touch/pen get no tilt — there is no hover state to tilt into.
    if (disabled || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    offsetX.set((event.clientX - rect.left) / rect.width - 0.5);
    offsetY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return { rotateX, rotateY, onPointerMove, onPointerLeave: reset, onBlur: reset };
}
