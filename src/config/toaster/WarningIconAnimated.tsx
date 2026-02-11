import { useEffect, useRef } from "react";

import warningAnimation from "@assets/animations/toast_warning.json";
import { motion } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

// Warning icon component with speed control
const WarningIconAnimated = (): React.JSX.Element => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.0);
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
        width: 50,
        height: 50,
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={warningAnimation}
        loop={false}
        autoplay={true}
        style={{ width: 50, height: 50 }}
      />
    </motion.div>
  );
};

export default WarningIconAnimated;
