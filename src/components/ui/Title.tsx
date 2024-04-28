import React, { LegacyRef, Ref, RefObject, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

type Props = {
  text: string;
  reference: any;
};

const Title = ({ reference, text }: Props) => {
  const isTitleInView = useInView(reference, {
    once: true,
    margin: "0px 0px -25% 0px",
  });

  const titleControls = useAnimation();

  useEffect(() => {
    // Check if the title is in view
    if (isTitleInView) {
      // If title is in view, start animation
      titleControls.start({
        transform: "translateY(0px)",
        transition: { type: "spring", duration: 1.5 },
      });
    }
  }, [isTitleInView, titleControls]);

  return (
    <div
      ref={reference}
      className="border-b-4 border-dark"
      style={{
        clipPath: "inset(0% 0% 0% 0%)",
      }}
    >
      <motion.div
        className="relative"
        initial={{
          transform: "translateY(160px)",
        }}
        animate={titleControls}
      >
        <div className="lg:text-7xl md:text-[54px] text-[44px] max-xs:text-4xl font-questrial pb-4 text-nowrap">
          {text}
        </div>
      </motion.div>
    </div>
  );
};

export default Title;
