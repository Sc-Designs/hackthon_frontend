import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/Arogya[black].png"
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';

function Navigation() {
  

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Blood Donation",
      color: "text-red-500",
      herfTo: "https://bloodcenter.netlify.app",
    },
    {
      name: "Home",
      color: "text-gray-700",
      herfTo: "/",
    },
    {
      name: "Fundraising Campaign",
      color: "text-gray-700",
      herfTo: "/Fundraisingcampaigns",
    },
    {
      name: "Raise Fund",
      color: "text-gray-700",
      herfTo: "/fundraiser",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      height: 'auto',
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      } 
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  return (
    <nav className="bg-white/80  backdrop-blur-md fixed w-full py-4 top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
                
    
          <motion.div
          onClick={()=>navigate("/")}
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <img src={logo} />
          </motion.div>

          {/* Desktop Navigation */}
         
          <motion.div
            className="hidden md:flex items-center space-x-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            {navItems.map((item, index) => (
              <Link key={index} to={item.herfTo}>
                <motion.div
                  className={`${item.color} hover:text-green-600 text-xl font-semibold `}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  {item.name}
                </motion.div>
              </Link>
            ))}
            <motion.button
              className="bg-red-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-green-700 transition-colors tracking-wide font-semibold"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 12px rgba(22, 163, 74, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/emergency")}>
              Emergency
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
               <motion.div
            onClick={()=>{navigate("/profile")}}
  className="w-10 h-10 rounded-full overflow-hidden "
  variants={itemVariants}
  whileHover={{ scale: 1.1 }}
>
  <img
    src={`${"data:image/jpeg;base64,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"}`} // Replace with real user image or profile logic
    alt="Profile"
    className="w-full h-full object-cover"
    />
</motion.div>
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 p-2 rounded-full"
              aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </motion.div>
       
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}>
              <div className="px-6  py-24 bg-[#86CCA0]/60 rounded-2xl">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`block px-3 py-2 text-5xl  ${item.color} font-bold rounded-lg hover:bg-gray-100/50 transition-colors`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}>
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  className="w-[40%] mt-2 text-xl bg-white text-[#86CCA0] px-6 py-3 rounded-full font-semibold"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 + 0.3 }}
                  onClick={() => navigate("/emergency")}>
                  Emergency
                </motion.button>

              </div>
            </motion.div>
            
          )}
         
        </AnimatePresence>
      </div>
      <div>
  
    </div>
    </nav>
  );
}

export default Navigation;