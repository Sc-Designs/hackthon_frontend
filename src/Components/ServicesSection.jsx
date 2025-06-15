import { motion } from 'framer-motion';
import {
  Search,
  MessagesSquare,
  FileText,
  Cpu,
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { 
      title: "Smart Doctor Search", 
      description: "Find and connect with doctors based on their name or speciality.", 
      icon: Search, 
      bgColor: "bg-[#57A2A2]",
      width: "w-full md:w-[30%]" // First row first box - 30%
    },
    { 
      title: "Real-Time Chat System", 
      description: "Chat directly with doctors for quick consultation and advice.", 
      icon: MessagesSquare, 
      bgColor: "bg-[#FF9C9C]",
      width: "w-full md:w-[70%]" // First row second box - 70%
    },
    { 
      title: "Report & Feedback Submission", 
      description: "Easily submit medical reports or feedback to your doctor.", 
      icon: FileText, 
      bgColor: "bg-[#86CBA0]",
      width: "w-full md:w-[70%]" // Second row first box - 70%
    },
    { 
      title: "AI-Powered Chatbot Assistance", 
      description: "Get instant help navigating the platform with our smart chatbot.", 
      icon: Cpu, 
      bgColor: "bg-[#A4A9FF]",
      width: "w-full md:w-[30%]" // Second row second box - 30%
    }
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

  const cardHover = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Bridging you to the right doctor
            <br />
             anytime anywhere
          </h2>
      
        </motion.div>

        <div className="flex flex-col gap-6">
          {/* First Row */}
          <motion.div 
            className="flex flex-col md:flex-row gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.slice(0, 2).map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className={`${service.bgColor} ${service.width} text-white px-8 rounded-2xl`}
                
              >
                <div className="flex flex-col  justify-between py-6 h-full">
                  <service.icon className="w-10 h-10 mb-6" />
                  <h3 className="text-xl font-bold ">{service.title}</h3>
                  <p className="text-base opacity-90 flex-grow">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row */}
          <motion.div 
            className="flex flex-col md:flex-row gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.slice(2, 4).map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className={`${service.bgColor} ${service.width} text-white p-8 rounded-2xl`}
                
              >
                <div className="flex flex-col h-full">
                  <service.icon className="w-10 h-10 mb-6" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-base opacity-90 flex-grow">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;