import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#151515] text-white text-center p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        className="mb-4"
      >
        <AlertTriangle className="w-16 h-16 text-red-500" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-6xl font-bold mb-2"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -5, 0, 5, 0] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        className="text-xl mb-6"
      >
        Halaman yang Anda cari tidak ditemukan
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
        transition={{ ease: "easeOut", repeat: Infinity, repeatType: "reverse", duration: 2 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all transform hover:scale-105 rounded-lg text-white font-semibold"
        >
          Kembali ke Beranda
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;