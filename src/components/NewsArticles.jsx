import React from "react";

const articles = [
  {
    id: 1,
    image: "https://www.kauveryhospital.com/wp-content/uploads/2023/12/1-5.jpg",
    category: "News",
    title: "Ensuring Blood Donation Safety During the Pandemic",
    date: "February 15, 2025",
    description:
      "Learn about the safety measures in place to protect blood donors and recipients during the pandemic. Your donation can save lives while keeping you safe.",
    link: "#",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "News",
    title: "Blood Supply Shortage: High Demand This Month",
    date: "February 10, 2025",
    description:
      "Hospitals are facing a critical shortage of blood supply this month. If you're eligible, consider donating to help patients in need.",
    link: "#",
  },
  {
    id: 3,
    image: "https://media.gettyimages.com/id/1290652548/photo/nurse-help-patient-to-stop-bleeding-while-donating-blood.jpg?s=612x612&w=gi&k=20&c=9amKQRtZhSau5oMWlErqBAHCZpM6VGvzqIAxQhnDz0o=",
    category: "Tips",
    title: "What to Avoid After Donating Blood",
    date: "February 8, 2025",
    description:
      "After donating blood, it's important to stay hydrated, avoid strenuous exercise, and get enough rest to help your body recover quickly.",
    link: "#",
  },
];

const NewsArticles = () => {
  return (
       <div className="py-16 bg-red-50 dark:bg-gray-900">
      <h2 className="text-center text-3xl font-bold text-red-600 mb-10">
        Emergency Requests
      </h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {[1,2,3,4].map(i => (
          <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-xl">
            <h3 className="font-bold">Blood Needed: O+</h3>
            <p>Location: Dhaka</p>
            {/* <button className="mt-3 text-red-600">View Details</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsArticles;
