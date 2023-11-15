"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
const CookieCard = () => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("cookie")) {
      setHide(true);
    }
  }, []);
  if (hide) return null;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3 }}
      className="w-96 h-48 cookie-gradient rounded-lg shadow-lg absolute bottom-10  right-20 p-3"
    >
      <div className="flex items-center gap-4">
        <Image
          alt="cookie"
          src={`/cookie.svg`}
          width={50}
          height={50}
          className="w-8 h-8"
        />
        <p className="text-lg">We use cookies!</p>
      </div>
      <p className="mt-2">
        We use cookies to ensure that we give you the best experience on our
        website. If you continue to use this site we will assume that you are
        happy with it.
      </p>
      <button
        onClick={() => {
          localStorage.setItem("cookie", "true");
          setHide(true);
        }}
        className="mt-2 bg-red-400 hover:bg-red-300 text-white rounded-lg px-3 py-1 text-sm"
      >
        Accept
      </button>
    </motion.div>
  );
};

export default CookieCard;
