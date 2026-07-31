import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useWindowPointerOffset } from "@/utils/pointerMotion";

// Luxury engineering graph paper behind the entire site.
//

const CELL = 100; // px — the box pitch
const SUBDIVISION = CELL / 4;
// Off by default: single clean pitch. Flip to true for classic
// engineering-paper subdivisions inside each box.
const SHOW_SUBDIVISIONS = false;
const OVERSCAN = 160; // plane bleeds past the viewport so motion never shows an edge

// Neutral white at 7% over #050505 lands the lines at rgb(23,23,23) — clearly
// readable boxes that still sit far below the content.
const LINE = "rgba(255, 255, 255, 0.07)";
const LINE_FAINT = "rgba(255, 255, 255, 0.03)";

const grid = [
  ...(SHOW_SUBDIVISIONS
    ? [
        `repeating-linear-gradient(to right, ${LINE_FAINT} 0 1px, transparent 1px ${SUBDIVISION}px)`,
        `repeating-linear-gradient(to bottom, ${LINE_FAINT} 0 1px, transparent 1px ${SUBDIVISION}px)`,
      ]
    : []),
  `repeating-linear-gradient(to right, ${LINE} 0 1px, transparent 1px ${CELL}px)`,
  `repeating-linear-gradient(to bottom, ${LINE} 0 1px, transparent 1px ${CELL}px)`,
].join(",");

const GridBackground = () => {
  const reduceMotion = useReducedMotion();

  // Scroll drift, wrapped at the cell size so the grid stays perfectly seamless
  // however far the page scrolls.
  const { scrollY } = useScroll();
  const scrollDrift = useTransform(scrollY, (value) =>
    reduceMotion ? 0 : -((value * 0.08) % CELL)
  );

  // Mouse parallax: a handful of pixels, deliberately below the threshold where
  // it reads as movement. It registers as depth, not animation.
  const pointer = useWindowPointerOffset({ disabled: reduceMotion });
  const spring = { stiffness: 60, damping: 20, mass: 0.6 };
  const pointerX = useSpring(
    useTransform(pointer.offsetX, [-0.5, 0.5], [6, -6]),
    spring
  );
  const pointerY = useSpring(
    useTransform(pointer.offsetY, [-0.5, 0.5], [6, -6]),
    spring
  );

  const y = useTransform(
    [scrollDrift, pointerY],
    ([drift, pointerOffset]) => drift + pointerOffset
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ perspective: 1400 }}
    >
      {/* Grid plane. Unmasked: the paper covers the full viewport at one even
          strength, which is the whole point. Depth comes from the bloom and
          vignette layered over it, not from fading the grid out. */}
      <motion.div
        className="absolute"
        style={{
          inset: -OVERSCAN,
          x: pointerX,
          y,
          // Barely more than a degree: enough for the surface to sit in space,
          // not enough to bend the lines into an effect.
          rotateX: 1.2,
          scale: 1.05,
          backgroundImage: grid,
          willChange: "transform",
        }}
      />

      {/* Soft bloom. Neutral white at very low alpha, breathing on a long
          cycle — lifts the centre of the page without tinting it. */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 30%, rgba(255, 255, 255, 0.045), transparent 70%)",
          willChange: "opacity, transform",
        }}
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.75, 1, 0.75], scale: [1, 1.04, 1] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vignette. Kept very shallow and pushed right to the edge — the
          previous, heavier version was erasing the grid it sat on. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 95% at 50% 45%, transparent 65%, rgba(0, 0, 0, 0.28) 100%)",
        }}
      />
    </div>
  );
};

export default GridBackground;
