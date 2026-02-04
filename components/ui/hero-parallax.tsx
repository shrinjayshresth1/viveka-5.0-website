"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Link } from "lucide-react";
import { FileText } from "lucide-react";
import Image from "next/image";
import Countdown from "../Countdown";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  const thirdRow = products.slice(8, 12);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-750, 80]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="min-h-screen md:min-h-[160vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              priority={true}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              priority={true}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full  left-0 top-0">
      <h1 className="text-6xl md:text-9xl font-bold font-space-grotesk tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
        V!VEKA <br />
        <span className="text-neon-cyan drop-shadow-[0_0_30px_rgba(0,240,255,0.4)]"> 5.0</span>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Experience the fusion of technology and intelligence. The largest Techno-Cultural fest is here. Join us for 3 days of innovation, competition, and celebration.
      </p>

      <Countdown />

      <div className="mt-8 flex flex-wrap gap-4 z-20 relative">
        <button className="px-8 py-3 rounded-full bg-neon-cyan text-black font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] cursor-pointer pointer-events-auto">
          Coming Soon
        </button>
        <a
          href="https://drive.google.com/file/d/1N7wEADfOzlOKdPCJPvfRAebJOfK1qTNh/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 hover:scale-105 transition-all border border-white/20 flex items-center gap-2 cursor-pointer pointer-events-auto"
        >
          <FileText size={20} />
          Event Brochure
        </a>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  priority = false,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  priority?: boolean;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-72 md:h-96 w-full md:w-[30rem] relative flex-shrink-0"
    >
      <div
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height={384}
          width={480}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
          sizes="480px"
          priority={priority}
          quality={75}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-space-grotesk font-bold text-2xl">
        {product.title}
      </h2>
    </motion.div>
  );
};
