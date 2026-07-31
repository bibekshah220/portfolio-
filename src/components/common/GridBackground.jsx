import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

// Engineering graph paper behind the whole site.
//
// Two grid layers (fine + coarse) on a slightly perspective-tilted plane, one
// ambient light wash, masked so it never reaches a hard edge. Mounted once in
// _app so it reads as one continuous surface across every section and route.
//
// Deliberately CSS-only: the grid is a repeating-linear-gradient, so there is
// no canvas, no rAF loop and no per-frame paint. Scroll parallax is a single
// translate3d driven by one motion value — GPU work only.
const COARSE = 160; // px; the fine grid is a quarter of this, so both loop cleanly
const PARALLAX = 0.12;

const GridBackground = () => {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Modulo the coarse cell so the plane loops seamlessly — the grid reads as
  // infinite without ever translating far from its origin.
  const y = useTransform(scrollY, (value) =>
    reduceMotion ? 0 : -((value * PARALLAX) % COARSE)
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ perspective: 1200 }}
    >
      {/* Grid plane. Sits taller than the viewport so the parallax translate
          never exposes an edge. */}
      <motion.div
        style={{
          y,
          // A degree and a half of tilt: enough to read as a surface in space,
          // not enough to bend the lines into a gimmick. Declared as motion
          // style props so framer composes them with `y` into one transform.
          rotateX: 1.5,
          scale: 1.04,
          top: -COARSE,
          height: `calc(100% + ${COARSE * 2}px)`,
          backgroundImage: [
            `repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0 1px, transparent 1px ${COARSE / 4}px)`,
            `repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px ${COARSE / 4}px)`,
            `repeating-linear-gradient(to right, rgba(56,189,248,0.07) 0 1px, transparent 1px ${COARSE}px)`,
            `repeating-linear-gradient(to bottom, rgba(56,189,248,0.07) 0 1px, transparent 1px ${COARSE}px)`,
          ].join(","),
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, #000 45%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, #000 45%, transparent 100%)",
        }}
        className="absolute inset-x-0"
      />

      {/* Ambient light. Slow, wide and low-contrast — gives the grid somewhere
          to fall off to instead of ending flat. */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(56,189,248,0.06), transparent 70%)",
        }}
        animate={reduceMotion ? undefined : { opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default GridBackground;
