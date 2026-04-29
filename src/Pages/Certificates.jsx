import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowLeft, ZoomIn } from "lucide-react";
import UJILEVEL from "../assets/certificates/SertifUjiLevel.jpg";
import AWS from "../assets/certificates/SertifAWS.jpg";
import PLAYIT from "../assets/certificates/PlayIT.png";
import ANGULAR from "../assets/certificates/SertifUdemy.jpg";
import FLUTTER from "../assets/certificates/SertifUdemy2.jpg";
import FULLSTACK from "../assets/certificates/SertifUdemy3.png";
import PKL from "../assets/certificates/SertifPKL.jpg";
import SHANKARA from "../assets/certificates/Certificate-Shankara.jpg";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "Uji Level Rakryan",
      description: "Sertifikat Uji Level Industri Rakryan kompetensi flowchart dan desain",
      image: UJILEVEL,
    },
    {
      title: "Asia Web Slicing Challenge",
      description: "Sertifikat kompetisi slicing website oleh institut asia malang",
      image: AWS,
    },
    {
      title: "Kompetisi Nasional PlayIT",
      description: "Sertifikat kompetisi kategori pengembangan website",
      image: PLAYIT,
    },
    {
      title:"Pembelajaran Framework Angular",
      description: "Sertifikat pembelajaran framework Angular JS oleh UDEMY",
      image:ANGULAR
    },
    {
      title:"Pembelajaran Framework Flutter (UI)",
      description: "Sertifikat pembelajaran pembuatan UI dengan Flutter oleh UDEMY",
      image:FLUTTER
    },
    {
      title:'Pembelajaran Fullstack Web',
      description:"Sertifikat pembelajaran Angular dan .NET oleh UDEMY",
      image:FULLSTACK
    },
    {
      title:'Sertifikat PKL',
      description:"Sertifikat PKL (Internship) di 3PM Solution",
      image:PKL
    },
     {
      title:'Sertifikat Outstanding Service',
      description:"Sertifikat Outstanding Service di Shankara Paperstraw",
      image:SHANKARA
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen text-white pt-10 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto" id="certificates">
      {/* Header & Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6"
      >
        <Link 
          to="/" 
          className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel hover:bg-white/10 transition-colors group w-fit"
        >
          <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          <span className="font-medium text-gray-300 group-hover:text-white transition-colors">Back to Home</span>
        </Link>
        
        <div className="inline-block border border-glass-border px-8 py-3 rounded-full glass-panel h-fit">
          <h1 className="font-semibold text-[24px] tracking-wide text-white">
            Certificates
          </h1>
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {certificates.map((certificate, index) => (
          <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} className="h-full">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-panel group overflow-hidden flex flex-col h-full rounded-[2rem] relative cursor-pointer"
              onClick={() => setSelectedImage(certificate.image)}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square md:aspect-[4/3] p-6 bg-white/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={certificate.image}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-in-out relative z-0"
                  alt={certificate.title}
                />
                
                {/* Zoom Icon Overlay */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-md p-2.5 rounded-full text-white">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow relative bg-gradient-to-b from-transparent to-black/20 text-center">
                <h2 className="text-[22px] font-bold tracking-tight text-white mb-3 group-hover:text-gray-300 transition-colors">
                  {certificate.title}
                </h2>
                <p className="text-gray-400 text-[15px] leading-relaxed flex-grow">
                  {certificate.description}
                </p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </motion.div>
      
      {/* Pop up Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <img src={selectedImage} className="w-full h-auto rounded-xl shadow-2xl" alt="Certificate detail" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Certificates;
