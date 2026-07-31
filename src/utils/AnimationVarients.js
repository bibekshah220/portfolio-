export const scaleOutAnimation = {
  offscreen: {
    scale: 0.5,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      // duration: 1.5,
    },
  },
};

export const heroImageAnimation = {
  offscreen: {
    x: 60,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "tween",
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

export const heroAnimation = {
  offscreen: {
    x: -60,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "tween",
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

export const fadeAnimation = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 1,
    },
  },
};

export const slideOutAnimation = {
  offscreen: {
    y: 40,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export const slideOutAnimation2 = {
  offscreen: {
    x: 40,
    y: 40,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export const slideRightAnimation = {
  offscreen: {
    x: -60,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const slideLeftAnimation = {
  offscreen: {
    x: 60,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const wordsContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      // delay: 5,
      staggerChildren: 0.08,
      // delayChildren: 0.5 * i,
    },
  },
};

export const wordsContainerNoDelay = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      // delay: 0.2,
      staggerChildren: 0.06,
      // delayChildren: 0.5 * i,
    },
  },
};

export const letterAnimation = {
  hidden: {
    opacity: 0,
    x: -20,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

// --- Production Grade Animations ---

export const productionBezier = [0.16, 1, 0.3, 1];

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: productionBezier,
    },
  },
};

export const heroNameAnimation = {
  hidden: {
    scale: 0.98,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: productionBezier,
      delay: 0.2,
    },
  },
};

// Route change transition. ponytail: opacity only — a transform here would
// make the wrapper a containing block and break the `fixed` header.
export const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: productionBezier },
  },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

export const cardEntrance = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: productionBezier,
    },
  },
};

// --- Grid card animations (reusable by any card grid) ---

// Put on the grid wrapper; children inherit `hidden`/`visible` and ripple in.
// Kept fully opaque so children own the fade — nesting two opacity animations
// makes the entrance look muddy.
export const gridStagger = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.08,
    },
  },
};

// Fade + rise + slight scale. Transform/opacity only, so it composites on the
// GPU and never reflows.
export const cardRise = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: productionBezier },
  },
};

// Idle loops. `phase` (an item index) desyncs neighbours so a grid breathes
// organically instead of pulsing in lockstep.
export const idleFloat = (phase = 0) => ({
  y: [0, -4, 0],
  transition: {
    duration: 3.2,
    repeat: Infinity,
    ease: "easeInOut",
    delay: (phase % 5) * 0.35,
  },
});

export const idleBreathe = (phase = 0) => ({
  scale: [1, 1.012, 1],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
    delay: (phase % 4) * 0.6,
  },
});
