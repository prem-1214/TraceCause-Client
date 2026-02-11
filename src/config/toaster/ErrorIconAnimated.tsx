import React, { useEffect, useRef } from "react";

import errorAnimation from "@assets/animations/toast_error.json";
import { motion } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

// Error icon component with speed control
const ErrorIconAnimated = (): React.JSX.Element => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.3);
    }
  }, []);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 35,
        height: 35,
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={errorAnimation}
        loop={false}
        autoplay={true}
        style={{ width: 35, height: 35 }}
      />
    </motion.div>
  );
};

export default ErrorIconAnimated;
