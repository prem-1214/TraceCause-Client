import { useEffect, useRef } from "react";

import infoAnimation from "@assets/animations/toast_info.json";
import { motion } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

// Info icon component with speed control
const InfoIconAnimated = (): React.JSX.Element => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.0);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.2,
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        flexShrink: 0,
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={infoAnimation}
        loop={true}
        autoplay={true}
        style={{ width: 50, height: 50 }}
      />
    </motion.div>
  );
};

export default InfoIconAnimated;
