import { motion } from "framer-motion";

const newsData = [
  {
    id: 1,
    date: "14 Feb, 2025",
    comments: "3 Comments",
    title: "Blood Donation Saves Lives",
    description:
      "Regular blood donation helps patients during surgery, accidents, and emergencies.",
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4",
  },
  {
    id: 2,
    date: "18 Feb, 2025",
    comments: "5 Comments",
    title: "A Single Donation, Multiple Smiles",
    description:
      "One unit of blood can save up to three lives. Your effort truly matters.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    id: 3,
    date: "20 Feb, 2025",
    comments: "2 Comments",
    title: "Emergency Blood Needs Rise",
    description:
      "Hospitals face daily shortages. Donors are needed more than ever.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    id: 4,
    date: "22 Feb, 2025",
    comments: "4 Comments",
    title: "Why Youth Should Donate Blood",
    description:
      "Young donors play a vital role in building a healthy future society.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
  },
  {
    id: 5,
    date: "25 Feb, 2025",
    comments: "6 Comments",
    title: "Safe Blood Donation Process",
    description:
      "Blood donation is safe, simple, and supervised by professionals.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67",
  },
  {
    id: 6,
    date: "27 Feb, 2025",
    comments: "1 Comment",
    title: "Donate Blood, Be a Hero",
    description:
      "Heroes don’t always wear capes—sometimes they donate blood.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  },
  {
    id: 7,
    date: "01 Mar, 2025",
    comments: "3 Comments",
    title: "Community Blood Drives",
    description:
      "Local blood drives bring communities together to save lives.",
    image:
      "https://images.unsplash.com/photo-1598257006458-087169a1f08d",
  },
  {
    id: 8,
    date: "03 Mar, 2025",
    comments: "2 Comments",
    title: "Your Blood Can Save a Child",
    description:
      "Children with serious illnesses rely on generous blood donors.",
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-red-500 uppercase font-semibold tracking-wider">
            Our News
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800 dark:text-white">
            Latest News & Updates
          </h3>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
            Stay updated with the latest blood donation news, awareness stories,
            and community impact from Blood Donation Friend.
          </p>
        </motion.div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsData.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 flex flex-col flex-grow">
                <p className="text-sm text-red-500 mb-2">
                  📅 {news.date} • 💬 {news.comments}
                </p>

                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {news.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
                  {news.description}
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full 
                  bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-md"
                >
                  Read More
                  <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
