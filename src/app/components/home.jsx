"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="mt-4 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-slate-600">
              Hello, We are{" "}
            </span>

            <br></br>
            <TypeAnimation
              sequence={[
                "Mighty Gurkha",
                1000,
                "Training Center",
                1000,
                "Bagar-1, Pokhara",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Every bead of sweat, every hour of training, and every challenge faced is a 
          testament to the unwavering dedication of our people. We believe in turning 
          dreams into reality, and we commit ourselves to this pursuit with courage, 
          strength, and honor. Our dedication and guidence with your efforts will be 
          the bridge between aspirations and achievements, and we stand firm in our 
          mission to make your dreams come true.
          </p>
          <p className="pt-3 text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We are a relatively new player in the market, having established ourselves 
          two years ago. However, our team comprises highly experienced and qualified 
          professionals who bring a wealth of expertise to the table. We are uncompromising 
          in our commitment to providing high-quality food, ensuring that our lads are 
          well-nourished for the rigorous training and tasks that lie ahead. Our comprehensive 
          training program has yielded impressive results, with ten of our academy&apos;s student 
          successfully enrolled in BA and SP programs. To know more about us please feel free to connect.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-2 w-full sm:w-fit rounded-full mr-2 hover:bg-gradient-to-br hover:from-slate-600 hover:to-green-600 bg-gradient-to-br from-slate-500 to-green-500 text-white"
            >
              <span className="">Connect</span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[170px] h-[170px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/gurkha.jpeg"
              alt="hero image"
              className="absolute transform rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
