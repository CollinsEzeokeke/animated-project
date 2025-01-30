'use client'

import { motion } from "framer-motion";
import { Pot } from "./model";

export default function HeroSection(){
  return (
    <div className="min-h-screen flex items-center justify-between px-8 md:px-16 py-12 bg-gradient-to-br from-green-50 to-emerald-50 m-0" id="TriggerContainer">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 h-[70vh]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800"
        >
          Discover the Magic of Aloe Vera
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          Nature&apos;s healing wonder, Aloe Vera, has been treasured for centuries for its remarkable therapeutic properties. This miraculous plant contains over 75 potentially active compounds, including vitamins, minerals, enzymes, and amino acids.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 text-gray-600"
        >
          <div className="flex items-start space-x-2">
            <span className="text-green-600 text-xl">•</span>
            <p>Natural healing properties for skin care and burns</p>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-green-600 text-xl">•</span>
            <p>Boosts immune system and supports digestive health</p>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-green-600 text-xl">•</span>
            <p>Rich in antioxidants and anti-inflammatory compounds</p>
          </div>
        </motion.div>
      </div>

      {/* Right Content - Animated Phone */}
      <div className="flex h-screen w-1/2 items-center mt-20">
      <Pot />
      </div>

    </div>
  );
};
