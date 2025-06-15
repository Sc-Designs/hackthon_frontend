import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigator = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      backgroundColor: "#166534", // darker green
      boxShadow: "0 4px 12px rgba(22, 101, 52, 0.3)"
    },
    tap: { scale: 0.98 }
  };

  return (
    <section className="pt-36 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 h-72 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-[#86CCA0] h-full rounded-3xl p-8 md:p-12 text-center flex flex-col justify-between"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            welcome to Arogya
          </motion.h1>

          <motion.div 
            className="flex flex-col justify-between md:flex-row items-center w-full"
            variants={containerVariants}
          >
            <motion.p 
              className="text-white text-lg md:text-xl mb-2 leading-[1]"
              variants={itemVariants}
            >
              Your Health, Our Mission <br />
              Trusted by Families for Generations
            </motion.p>
          
            <motion.button 
              className="bg-green-700 text-white text-sm cursor-pointer px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={()=>navigator("/see-alldoctor")}
            >
              book consultation
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;