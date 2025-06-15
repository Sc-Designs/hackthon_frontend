import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/Arogya[black].png"
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"

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
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors text-sm font-semibold"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 12px rgba(22, 163, 74, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/profile")}>
              Dashboard
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
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
                  onClick={() => navigate("/profile")}>
                  Dashboard
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navigation;