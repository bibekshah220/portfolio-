import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { pageTransition } from "@/utils/AnimationVarients";

const CursorTrail = dynamic(() => import("@/components/common/CursorTrail"), {
  ssr: false,
});

// Below the fold of the critical path — the grid is decorative, so it loads
// after the page is interactive.
const GridBackground = dynamic(
  () => import("@/components/common/GridBackground"),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Bibek Shah is a MERN Stack Developer and Software Engineer from Kathmandu, Nepal, specializing in full-stack web development, cloud technologies, and secure, scalable applications."
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <meta property="og:site_name" content="Bibek Shah" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:image" content="/WebsiteBanner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <MotionConfig reducedMotion="user">
        <GridBackground />
        <CursorTrail />
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div
            key={router.asPath}
            variants={pageTransition}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
      <Analytics />
    </>
  );
}
