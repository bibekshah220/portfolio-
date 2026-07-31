import { motion, useReducedMotion } from "framer-motion";
import { cardRise, idleBreathe, idleFloat } from "@/utils/AnimationVarients";
import { useTilt } from "@/utils/pointerMotion";

const FALLBACK_GLOW = "#38bdf8";

const SkillCard = ({ icon, title, index = 0 }) => {
  const reduceMotion = useReducedMotion();
  const tilt = useTilt({ max: 7, disabled: reduceMotion });

  // The tech colour already lives on the icon element (`<FaReact color="..." />`),
  // so the glow reads it straight off the passed node — no data changes, and
  // image-based icons fall back to the site accent.
  const glow = icon?.props?.color ?? FALLBACK_GLOW;

  return (
    // Entrance layer: inherits hidden/visible from the grid's stagger.
    <motion.div
      variants={cardRise}
      className="group relative h-full"
      style={{ perspective: 800 }}
    >
      {/* Tilt + hover layer. Separate from the entrance layer so the two never
          fight over the same transform. */}
      <motion.div
        className="relative h-full"
        style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
        animate={reduceMotion ? undefined : idleBreathe(index)}
        whileHover={reduceMotion ? undefined : { scale: 1.06, y: -8 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        {/* Gradient glow behind the card, tinted with the tech colour. */}
        <div
          aria-hidden="true"
          className="absolute -inset-2 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50 motion-reduce:hidden"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glow}, transparent 70%)`,
          }}
        />

        {/* Glass surface: same palette colour at 65%, so the graph-paper
            background reads through the card instead of being blocked by it.
            `ring` rather than `border` — a ring paints without taking layout
            space, so nothing shifts. */}
        <div
          className="relative flex flex-col gap-3 items-center justify-center bg-backgroundSecondary/65 backdrop-blur-md ring-1 ring-white/[0.06] md:py-10 py-6 rounded-xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          role="img"
          aria-label={title}
          title={title}
        >
          {/* Light sweep across the card on hover. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-[900ms] ease-out group-hover:translate-x-full motion-reduce:hidden"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.13) 50%, transparent 60%)",
            }}
          />

          {/* Border glow — absolute, so hovering never nudges the layout. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-xl border opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ borderColor: glow }}
          />

          <div className="md:text-[3rem] text-[2rem] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <motion.span
              className="inline-block"
              animate={reduceMotion ? undefined : idleFloat(index)}
            >
              {icon}
            </motion.span>
          </div>
          <span className="text-textDim font-light font-prompt sm:text-base text-sm text-center transition-colors duration-300 group-hover:text-primary">
            {title}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
