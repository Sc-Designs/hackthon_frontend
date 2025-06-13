import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const ReviewSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  
  const reviews = [
    { name: "Ritika Sharma", location: "Patient", text: "Finding the right doctor was never this easy. The chat feature made my consultation feel personal and quick — all from home!", rating: 5 },
    { name: "Amit Kumar", location: "Patient", text: "The AI chatbot helped me navigate everything smoothly. Great platform for healthcare needs!", rating: 5 },
    { name: "Priya Singh", location: "Patient", text: "Report submission was so simple and the doctors responded quickly. Highly recommended!", rating: 5 }
  ];

  const nextReview = () => {
    setDirection(1);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const reviewVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    })
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="inline-flex items-center bg-[#86CBA0] px-4 py-2 rounded-full mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-green-50">average google rating is 4.7 stars</span>
        </motion.div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Our doctors have earned over<br />6900+ reviews on Google!
        </motion.h2>
        
        <div className="max-w-2xl mx-auto relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentReview}
              custom={direction}
              variants={reviewVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white p-8 rounded-2xl "
            >
              <div className="flex items-center mb-4">
                <img 
                  src={`https://ui-avatars.com/api/?name=${reviews[currentReview].name}&background=10b981&color=fff`} 
                  alt={reviews[currentReview].name} 
                  className="w-12 h-12 rounded-full mr-4" 
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{reviews[currentReview].name}</h4>
                  <p className="text-gray-600 text-sm">{reviews[currentReview].location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-left">"{reviews[currentReview].text}"</p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button 
                key={index} 
                onClick={() => {
                  setDirection(index > currentReview ? 1 : -1);
                  setCurrentReview(index);
                }} 
                className={`w-3 h-3 rounded-full transition-colors ${index === currentReview ? 'bg-[#86CBA0]' : 'bg-gray-300'}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;