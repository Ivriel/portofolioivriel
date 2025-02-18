import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import LIGA from "../assets/competitions/ligaSMK.png";
import AWS from "../assets/competitions/logoaws.png";
import PLAYIT from "../assets/competitions/playIT.png";
import LKS from "../assets/competitions/lksSMK.png"

function Competition() {
  const [selectedImage, setSelectedImage] = useState(null);

  const competitions = [
    {
      title: "Liga SMK",
      description: "Kompetisi coding nasional untuk siswa SMK oleh Alcademi",
      image: LIGA,
    },
    {
      title: "Asia Web Slicing Challenge",
      description: "Kompetisi coding website oleh Institut Asia Malang",
      image: AWS,
    },
    {
      title: "PlayIT Polinema",
      description: "Kompetisi IT nasional oleh Politeknik Negeri Malang",
      image: PLAYIT,
    },
    {
      title: "LKS Tingkat Sekolah",
      description: "Kompetisi LKS tingkat sekolah di SMK Negeri 8 Malang",
      image: LKS,
    },
  ];

  return (
    <div className="text-white mt-20 w-full px-5 sm:px-10 lg:px-20 mb-10" id="certificates">
      <h1 className="font-medium text-[28px] border-white border-[1px] px-8 py-2 rounded-full w-fit">
        Competitions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {competitions.map((competition, index) => (
          <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2}>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
              className="relative overflow-hidden bg-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col items-center text-center border border-white/20 shadow-lg hover:shadow-2xl hover:border-white/50 transition duration-150 cursor-pointer"
              onClick={() => setSelectedImage(competition.image)}
            >
              <div className="relative w-full max-w-[400px] h-[280px] rounded-lg overflow-hidden">
                <img
                  src={competition.image}
                  className="w-full h-full object-cover transition duration-150 hover:scale-105"
                  alt={competition.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <h1 className="mt-4 font-bold text-lg  text-white text-glow">{competition.title}</h1>
              <p className="text-gray-300">{competition.description}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
      
      {/* pop up gambar */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full p-5"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img src={selectedImage} className="w-full rounded-lg" alt="Certificate" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Competition;
