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
  // `custom` is the item index — grid items ripple in per row instead of
  // landing all at once (ported from the v2 skills showcase stagger).
  // ponytail: modulo 6 = the widest grid, so the delay never exceeds ~0.3s.
  onscreen: (index = 0) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: (index % 6) * 0.06,
    },
  }),
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
