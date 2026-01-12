import { motion } from "framer-motion";

const steps = [
  {
    title: "Register as a Donor",
    desc: "Create your profile and become a verified blood donor in minutes.",
  },
  {
    title: "Receive Blood Requests",
    desc: "Get notified instantly when someone nearby needs your blood group.",
  },
  {
    title: "Donate & Save Lives",
    desc: "Donate blood safely and help save lives in critical situations.",
  },
];

const RecentBloodRequests = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4"
            alt="Blood Donation"
            className="rounded-2xl h-[400px] shadow-lg w-full"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
            How Blood Donation Works
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Blood Donation Friend makes the donation process simple, fast, and
            life-saving. Follow these easy steps to become a hero.
          </p>

          {/* Steps */}
          <div className="space-y-4 mb-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow flex gap-4 items-start"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg cursor-pointer"
          >
            Become a Donor Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentBloodRequests;
