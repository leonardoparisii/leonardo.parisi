import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import classNames from "classnames";
import { TitleProps } from "@/types";

const Title = ({
  reference,
  text,
  border = true,
  viewMargin = "0px 0px -25% 0px",
  delay = 0,
  className,
}: TitleProps) => {
  const isTitleInView = useInView(reference, {
    once: true,
    margin: viewMargin,
  });

  const titleControls = useAnimation();

  useEffect(() => {
    // Check if the title is in view
    if (isTitleInView) {
      // If title is in view, start animation
      titleControls.start({
        transform: "translateY(0px)",
        transition: { type: "spring", duration: 1.5, delay },
      });
    }
  }, [isTitleInView, titleControls]);

  return (
    <div
      ref={reference}
      className={classNames(border && "border-b-4 border-dark")}
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
        <div
          className={classNames(
            className,
            "lg:text-7xl md:text-[54px] text-[44px] max-xs:text-4xl font-questrial pb-4"
          )}
        >
          {text}
        </div>
      </motion.div>
    </div>
  );
};

export default Title;
