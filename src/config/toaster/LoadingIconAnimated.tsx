import { motion } from "framer-motion";

const LoadingIconAnimated = (): React.JSX.Element => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
      }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50">
        <motion.circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="90 40"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "center" }}
        />

        <motion.circle
          cx="25"
          cy="25"
          r="8"
          fill="currentColor"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "center" }}
        />

        {[0, 120, 240].map((angle, index) => (
          <motion.circle
            key={index}
            cx="25"
            cy="25"
            r="3"
            fill="currentColor"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.2,
            }}
            style={{
              transformOrigin: "center",
              transform: `rotate(${angle}deg) translateX(15px)`,
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

export default LoadingIconAnimated;
