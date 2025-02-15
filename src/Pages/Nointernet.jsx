import { useState, useEffect } from "react";
import { WifiOff, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

function NoInternet() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#151515] text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <WifiOff className="w-16 h-16 text-red-500" />
        <h1 className="text-3xl font-bold">Oops! No Internet Connection</h1>
        <p className="text-lg text-gray-300 max-w-md">
          Sepertinya anda sedang offline. Periksa koneksi internet anda dan coba lagi.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg flex items-center gap-2"
          onClick={() => window.location.reload()}
        >
          <RefreshCcw className="w-5 h-5" />
          Coba Lagi
        </motion.button>
      </motion.div>
    </div>
  );
}

export default NoInternet;
