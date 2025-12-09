import { motion } from "framer-motion";

const FeaturedSection = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-red-600 mb-4">
            About BloodBD
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed">
            BloodBD is a community-driven digital platform built to connect
            blood donors and recipients across Bangladesh. Our mission is to
            save lives by connecting people through technology and awareness.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: "🩸", title: "800,000+ Units Needed", desc: "Annually across Bangladesh" },
              { icon: "❤️", title: "3 Lives Saved", desc: "Per single donation" },
              { icon: "🧪", title: "B+ / O+ Most Demanded", desc: "Popular blood type in Bangladesh" },
              { icon: "🤲", title: "31% Voluntary Donors", desc: "Working to increase this" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <span className="text-red-500 text-3xl">{item.icon}</span>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src="https://i.ibb.co.com/fdRsqnnk/images.jpg"
            alt="Blood Donation"
            className="max-w-md w-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default FeaturedSection;
