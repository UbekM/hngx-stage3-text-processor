/** @format */

"use client";

import Image from "next/image";
import Button from "../components/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col p-10 justify-center items-center min-h-screen text-center">
      <header className="flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            alt="LingoBot Logo"
            src={"/lingobot.png"}
            width={80}
            height={80}
          />
        </motion.div>
        <h1 className="font-bold text-[1.7rem] bg-gradient-to-r from-[#63D7F6] to-[#5376F6] bg-clip-text text-transparent">
          Lingo<span className="font-bold">Bot</span>
        </h1>
      </header>
      <main className="text-center flex flex-col items-center pt-16 lg:w-1/3">
        <p className="font-semibold text-2xl pb-4 font-">
          Welcome to Lingo<span className="font-bold">Bot</span>
        </p>
        <p className="font-light">
          LingoBot is your smart AI assistant for language detection,
          translation, and summarization. Translate seamlessly across languages
          with ease!
        </p>
        <Link href={"/chat"} className="shadow-lg mt-20 ">
          <Button text="Start Chat >" />
        </Link>
      </main>
    </div>
  );
}
