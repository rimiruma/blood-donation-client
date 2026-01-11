import { motion } from "framer-motion";
import { FaHeartbeat, FaHandsHelping, FaClock, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaHeartbeat />,
    title: "Trusted Blood Donors",
    desc: "We connect verified and trusted donors to patients in need.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: <FaHandsHelping />,
    title: "Emergency Support",
    desc: "Quick help during accidents, surgeries, and critical situations.",
    color: "from-rose-500 to-red-600",
  },
  {
    icon: <FaClock />,
    title: "Fast Response Time",
    desc: "Instant blood request notifications for faster donations.",
    color: "from-red-400 to-orange-500",
  },
  {
    icon: <FaUsers />,
    title: "Strong Community",
    desc: "A growing community committed to saving lives together.",
    color: "from-pink-500 to-red-500",
  },
];

const BlockSection = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600">
            Why Choose Blood Donation Friend
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
            We are committed to building a fast, reliable, and life-saving blood
            donation platform for everyone.
          </p>
        </motion.div>

        {/* Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto mb-5 flex items-center justify-center 
                rounded-full bg-gradient-to-r ${item.color} text-white text-2xl`}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockSection;
