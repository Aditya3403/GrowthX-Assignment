"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [startMoveUp, setStartMoveUp] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setStartMoveUp(true);
      setShowThird(true);
    }, 2000);

    const t2 = setTimeout(() => setFadeOut(true), 3500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="h-screen bg-[#000] flex items-center justify-around flex-col">
      <div className="relative flex flex-col items-center justify-center space-y-2">
        {/* First Element */}
        <motion.img
          src="/First.png"
          alt="First"
          initial={{ x: "-10vw", rotate: -180, scale: 0 }}
          animate={{
            x: 0,
            rotate: 0,
            scale: 0.8,
            y: startMoveUp ? -50 : 0,
            opacity: fadeOut ? 0 : 1,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-5 h-5"
        />

        {/* Second Element */}
        <motion.img
          src="/Second.png"
          alt="Second"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: fadeOut ? 0 : 1,
            y: startMoveUp ? -50 : 0, 
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="w-12 h-12"
        />
      </div>

      {/* Third Element */}
      <motion.img
        src="/Third.png"
        alt="Third"
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: showThird ? (fadeOut ? 0 : 1) : 0,
          y: startMoveUp ? -50 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="w-20 h-auto"
      />
    </div>
  );
}
