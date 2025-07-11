"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StairTransition = () => {
  const pathname = usePathname();

  // Set to false to completely disable transition animations
  const enableTransitions = true;

  if (!enableTransitions) {
    return null;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          {/* Simplified transition - just a quick fade */}
          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-40"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { delay: 0.05, duration: 0.15, ease: "easeInOut" } }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
