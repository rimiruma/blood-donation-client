import { motion } from "framer-motion";

const CareSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Be Happy & Keep Smiling
          </h2>

          <div className="w-20 h-1 bg-red-500 mb-6"></div>

          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            We believe that caring for people goes beyond medical support. Our
            dedicated and compassionate team works closely with donors,
            patients, and families to ensure safe, reliable, and life-saving
            blood donation services for everyone.
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full 
            bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-lg"
          >
            Learn More About Us
            <span className="text-lg">→</span>
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://templates.bwlthemes.com/blood_donation/v_2/images/about_feat_bg.jpg"
            alt="Care & Support"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default CareSection;
