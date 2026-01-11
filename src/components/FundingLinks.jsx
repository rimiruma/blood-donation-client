import React from "react";
import { motion } from "framer-motion";
import {
  FaHandHoldingHeart,
  FaAmbulance,
  FaHospital,
  FaDonate,
} from "react-icons/fa";

const fundingData = [
  {
    id: 1,
    title: "Emergency Blood Support",
    description:
      "Help patients who urgently need blood and cannot afford testing or transportation costs.",
    icon: <FaAmbulance />,
    amount: "৳ 1,000 – ৳ 10,000",
    color: "bg-red-500",
  },
  {
    id: 2,
    title: "Blood Camp & Awareness",
    description:
      "Support blood donation camps, awareness programs, and volunteer activities.",
    icon: <FaHandHoldingHeart />,
    amount: "৳ 500 – ৳ 5,000",
    color: "bg-pink-500",
  },
  {
    id: 3,
    title: "Patient Treatment Fund",
    description:
      "Contribute to medical tests, hospital charges, and treatment for critical patients.",
    icon: <FaHospital />,
    amount: "৳ 2,000 – ৳ 20,000",
    color: "bg-rose-600",
  },
  {
    id: 4,
    title: "Platform Maintenance",
    description:
      "Help us maintain servers, security, and improve the blood donation platform.",
    icon: <FaDonate />,
    amount: "৳ 300 – ৳ 3,000",
    color: "bg-red-700",
  },
];

const FundingLinks = () => {
  return (
    <section className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-red-600">
            Funding & Support
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Even if you cannot donate blood, you can still save lives by
            supporting patients, blood camps, and emergency services.
          </p>
        </motion.div>

        {/* Funding Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {fundingData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl mb-4 ${item.color}`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {item.description}
                </p>

                <p className="text-sm font-medium text-red-500">
                  Suggested Amount: {item.amount}
                </p>
              </div>

              <button className="mt-6 w-full py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition">
                Donate Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 dark:bg-gray-900 bg-red-600 rounded-3xl p-10 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Your Support Can Save Lives
          </h3>
          <p className="max-w-2xl mx-auto mb-6">
            Every contribution helps us reach more patients, organize blood
            donation programs, and respond faster during emergencies.
          </p>
          <button className=" dark:bg-red-600 dark:text-white text-red-600 px-8 py-3 rounded-full font-semibold bg-white cursor-pointer">
            Become a Supporter
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FundingLinks;
