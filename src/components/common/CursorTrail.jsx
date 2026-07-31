import { useEffect, useRef } from "react";
import { cursorTrail } from "@/utils/cursorTrail";

const CursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ponytail: no trail for touch pointers (no cursor to trail) or when the
    // user asked for reduced motion.
    const skip = window.matchMedia(
      "(pointer: coarse), (prefers-reduced-motion: reduce)"
    ).matches;
    if (skip) return;

    const { start, cleanUp } = cursorTrail({ canvas });
    start();
    return cleanUp;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full z-[15] pointer-events-none"
    />
  );
};

export default CursorTrail;
