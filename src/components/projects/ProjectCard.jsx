import { slideOutAnimation } from "@/utils/AnimationVarients";
import { motion, useReducedMotion } from "framer-motion";
import { useTilt } from "@/utils/pointerMotion";
import Image from "next/image";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const ProjectCard = ({ data }) => {
  const reduceMotion = useReducedMotion();
  // Shallower than the skill tiles — a wide image tilts more visibly than a
  // small square, so the same angle would read as a wobble.
  const tilt = useTilt({ max: 4, disabled: reduceMotion });

  return (
    <div className="flex flex-col gap-4">
      <a href={data.url} target="_blank" rel="noreferrer" className="group block">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideOutAnimation}
          style={{ perspective: 900 }}
          className="relative"
        >
          {/* Contact shadow cast under the lifted card. Lives outside the
              image wrapper, which clips its own overflow. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 bottom-0 -z-10 h-10 rounded-[50%] bg-black/50 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:hidden"
          />
          <motion.div
            className="relative w-full overflow-hidden rounded-xl"
            style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
            onPointerMove={tilt.onPointerMove}
            onPointerLeave={tilt.onPointerLeave}
            whileHover={reduceMotion ? undefined : { y: -6 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
          >
            <Image
              src={data.featuredImage}
              className="object-cover rounded-xl hover:scale-110 duration-500 transition-all"
              alt={data.title} // Providing meaningful alt text
              height={379}
              width={379}
            />
            {/* Border lights up on hover, so the whole tile reads as one hit
                target instead of just the image. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/0 transition-all duration-500 group-hover:ring-primary/30"
            />
          </motion.div>
        </motion.div>
      </a>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideOutAnimation}
        className="flex flex-col gap-3"
      >
        <h3 className="heading3 leading-tight">{data.title}</h3>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 flex-wrap">
            {data.stack.map((entry, key) => (
              <div
                className="py-1 px-3 bg-backgroundSecondary text-sm rounded-xl"
                key={key}
              >
                <span className="text-primary font-extralight font-karla">
                  {entry}
                </span>
              </div>
            ))}
          </div>
          {/* Rendering description safely using dangerouslySetInnerHTML */}
          <div
            className="text-textDim font-karla font-light text-sm prose-sm prose-invert max-w-none
                       prose-ul:list-none prose-ul:pl-0 prose-li:mb-2 prose-li:relative prose-li:pl-6
                       prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0
                       prose-li:before:top-[10px] prose-li:before:w-2 prose-li:before:h-[2px]
                       prose-li:before:bg-primary/30"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <div>
            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              className="w-max flex flex-row gap-3 items-center text-primary rounded-xl py-2 pl-3 pr-4 bg-backgroundSecondary border border-backgroundLight duration-150 transition-all font-light font-karla text-sm hover:bg-backgroundLight"
            >
              <BsBoxArrowInUpRight />
              <span>View Project</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
