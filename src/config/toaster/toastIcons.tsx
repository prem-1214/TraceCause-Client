import successAnimation from "@assets/animations/toast_success.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import ErrorIconAnimated from "./ErrorIconAnimated";
import InfoIconAnimated from "./InfoIconAnimated";
import LoadingIconAnimated from "./LoadingIconAnimated";
import WarningIconAnimated from "./WarningIconAnimated";

export const toastIcons = {
  success: (
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
        width: 70,
        height: 70,
      }}
    >
      <Lottie
        animationData={successAnimation}
        loop={false}
        autoplay={true}
        style={{ width: 70, height: 70 }}
      />
    </motion.div>
  ),

  error: <ErrorIconAnimated />,

  warning: <WarningIconAnimated />,

  info: <InfoIconAnimated />,

  loading: <LoadingIconAnimated />,
};
