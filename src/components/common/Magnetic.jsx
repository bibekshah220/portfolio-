import { motion, useReducedMotion } from "framer-motion";
import { useMagnetic } from "@/utils/pointerMotion";

// Wraps any interactive element so it leans toward the cursor and springs back.
// The pull is capped at a few pixels — the point is to make the target feel
// responsive before it is clicked, not to move it out from under the pointer.
const Magnetic = ({ children, max = 8, className = "inline-block" }) => {
  const reduceMotion = useReducedMotion();
  const { x, y, ...bind } = useMagnetic({ max, disabled: reduceMotion });

  return (
    <motion.div className={className} style={{ x, y }} {...bind}>
      {children}
    </motion.div>
  );
};

export default Magnetic;
