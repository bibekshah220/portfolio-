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
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:site_name" content="Bibek Shah" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Bibek Shah" />
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
