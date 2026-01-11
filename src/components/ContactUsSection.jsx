import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactUsSection = () => {
  return (
    <div className="my-16">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          py-20 px-6 text-center rounded-lg overflow-hidden
          bg-gradient-to-r from-red-700 to-red-900
          dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900
        "
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white dark:text-gray-100 text-5xl font-bold mb-6"
        >
          Become a Lifesaver Today
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-white/90 dark:text-gray-300 max-w-3xl mx-auto text-lg mb-10"
        >
          Register as a donor or search for donors in need. <br />
          Every drop counts — join the movement!
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(255,255,255,0.4)",
              "0 0 25px rgba(255,255,255,0.8)",
              "0 0 0px rgba(255,255,255,0.4)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="
            bg-red-500 hover:bg-red-600
            dark:bg-red-600 dark:hover:bg-red-700
            text-white px-12 py-4 rounded-full
            text-xl font-semibold shadow-lg
          "
        >
          <Link to="/register">Register as Donor</Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ContactUsSection;
