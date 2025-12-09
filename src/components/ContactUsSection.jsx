import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactUsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-red-700 to-red-900 py-20 px-6 text-center rounded-lg my-16 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-white text-5xl font-bold mb-6"
      >
        Become a Lifesaver Today
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-white/90 max-w-3xl mx-auto text-lg mb-10"
      >
        Register as a donor or search for donors in need. 
        Every drop counts — join the movement!
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ boxShadow: ["0 0 0px #fff", "0 0 20px #fff", "0 0 0px #fff"] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg"
      >
        <Link to="/register">Register as Donor</Link>
      </motion.button>
    </motion.div>
  );
};

export default ContactUsSection;
