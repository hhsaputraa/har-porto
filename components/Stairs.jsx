import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate reverse index
const reverseIndex = (index, totalSteps) => {
  return totalSteps - index - 1;
};

const Stairs = () => {
  const pathname = usePathname(); // Get current path
  const totalSteps = 6; // Number of animated elements

  // Render nothing if the current path is '/contact'
  if (pathname === "/contact") {
    return null;
  }

  return (
    <>
      {[...Array(totalSteps)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index, totalSteps) * 0.1,
            }}
            className="h-full w-full bg-white absolute"
            style={{ top: 0 }} // Initial position at the top
          />
        );
      })}
    </>
  );
};

export default Stairs;
