"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Hero = () => {
  return (
    <motion.section
      initial={{ y: -300 }}
      animate={{ y: 100 }}
      transition={{
        ease: "linear",
        duration: 2,
        x: { duration: 1 },
      }}
      className="text-gray-600 body-font gradient-box rounded-3xl"
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-8 md:px-24 md:py-10 md:flex-row">
        <div className="md:w-1/2 w-full mb-5 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            width={720}
            height={600}
            src={"/bg.svg"}
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left md:pl-12">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Super hero
          </h1>
          <p className="mb-8 leading-relaxed ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quos, quas, voluptate, tempora quod quia dolorum
            voluptatem nesciunt quibusdam autem. tempora quod quia dolorum
            voluptatem nesciunt quibusdam autem.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
            <button className="mb-4 md:mr-4 inline-flex text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-300 rounded text-lg">
              Start Exploring
            </button>
            <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Read articles
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
