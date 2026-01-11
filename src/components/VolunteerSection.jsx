import React from "react";
import { FaHandHoldingHeart, FaUsers, FaDonate } from "react-icons/fa";
import { motion } from "framer-motion";

const VolunteerSection = () => {
  // Motion Variants
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="py-16 px-6 md:px-20 bg-red-100 dark:bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-red-700 dark:text-red-500 mb-12"
      >
        Join Our Volunteer Program
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        {/* Card 1 */}
        <motion.div
          className="
            bg-white dark:bg-gray-800
            shadow-lg rounded-lg p-8
          "
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          whileHover={{ scale: 1.05 }}
        >
          <FaHandHoldingHeart className="text-red-600 dark:text-red-500 mx-auto text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Be a Donor
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Contribute your blood to save lives. Every drop counts and can make a huge difference.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="
            bg-white dark:bg-gray-800
            shadow-lg rounded-lg p-8
          "
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          whileHover={{ scale: 1.05 }}
        >
          <FaUsers className="text-red-600 dark:text-red-500 mx-auto text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Join as Volunteer
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Help organize blood donation camps and raise awareness in your community.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="
            bg-white dark:bg-gray-800
            shadow-lg rounded-lg p-8
          "
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          whileHover={{ scale: 1.05 }}
        >
          <FaDonate className="text-red-600 dark:text-red-500 mx-auto text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Support the Cause
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Contribute your time or resources to support our blood donation drives and save lives.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default VolunteerSection;
