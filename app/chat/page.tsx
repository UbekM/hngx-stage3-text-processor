/** @format */
"use client";

import Image from "next/image";
import { Send } from "lucide-react";
import Link from "next/link";
import ButtonSmall from "../components/buttonSmall";

export default function Chat() {
  return (
    <div className="flex flex-col  justify-between items-center min-h-screen bg-[#111621] ">
      <header className="sticky top-0 z-50 w-full bg-[#040d1d] shadow-[#5ad9fc]">
        <Link
          href="/"
          className="flex justify-center items-center gap-2 py-3 pt-4"
        >
          <Image
            alt="LingoBot Logo"
            src={"/lingobot.png"}
            width={27}
            height={27}
          />
          <h1 className="text-[1.3rem] -translate-y-1">
            Lingo<span className="font-bold ">Bot</span>
          </h1>
        </Link>
      </header>
      <main className="flex flex-col items-center pt-4 lg:pt-7 lg:px-20 w-full flex-grow bg-[#111621] mx-20 justify-between">
        {/* OUTPUT CONTENT */}
        {/* USER TYPED CONTENT */}
        <div className="h-full text-black flex flex-col items-end w-full px-4 lg:px-0 lg:w-4/5">
          <p className="text-right text-xs px-2 text-white p-1 w-full ">
            <strong>Detected Language:</strong> English
          </p>
          <div className="py-[1.2rem] px-6 rounded-s-2xl rounded-b-2xl lg:max-w-[60%] bg-slate-300 mb-2">
            <p>
              Hello, how are you doing today? I am LingoBot, your smart AI
              assistant for language detection, translation, and summarization.
            </p>
          </div>
          {/* BUTTONS */}
          <div>
            <div className="md:flex block lg:space-y-0 space-y-2 gap-6 pb-[1.2rem] items-center justify-center">
              <ButtonSmall text="Summarize" />
              <div className="flex gap-1 items-center bg-[#0D101B] p-1 rounded-xl">
                <select
                  name=""
                  id=""
                  className="flex w-full rounded-xl min-w-fit px-2 font-light text-base bg-[#0D101B] text-white border-[#5ad9fc] border py-[0.37rem] hover:cursor-pointer focus:border-2"
                >
                  <option value="">English (en)</option>
                  <option value="">Portuguese (pt)</option>
                  <option value="">Spanish (es)</option>
                  <option value="">Russian (ru)</option>
                  <option value="">Turkish (tr)</option>
                  <option value="">French (fr)</option>
                </select>
                <ButtonSmall text="Translate" />
              </div>
            </div>
          </div>
          <div className="w-11/12 lg:w-4/5 text-white ">

            <p>Hello</p>
          </div>
        </div>

        {/* TEXTAREA */}
        <div className="relative mb-3 w-11/12 lg:w-4/5 h-40  ">
          <textarea
            name=""
            id=""
            className="rounded-2xl bg-[#0c101a] focus:border-2 outline-none w-full h-36 p-5 resize-none custom-scrollbar border border-[#5ad9fc]  focus:from-[#5ad9fc] focus:to-[#4067f1]"
            placeholder="Type Message of more than 150 Characters"
            rows={1}
            cols={30}
          ></textarea>
          <div className="absolute -bottom-2 lg:top-1/2 right-5 -translate-y-1/2 rounded-xl lg:w-14 lg:h-12 w-10 h-10 bg-gradient-to-r from-[#63D7F6] to-[#5376F6] flex justify-center items-center hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#5ad9fc] hover:to-[#4067f1]">
            <Send className="text-[#050C1D] lg:w-6 lg:h-6 w-5 " />
          </div>
        </div>
      </main>
      {/* FOOTER */}
      <footer className="text-sm py-3 pb-4 bg-[#040d1d] w-full">
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-4 px-3 w-auto ">
          <div className="flex justify-center items-center gap-2 mb-1 lg:border-r lg:pr-3 lg:border-r-gray-600 w">
            <Image
              alt="LingoBot Logo"
              src={"/lingobot.png"}
              width={18}
              height={18}
            />
            <p className="font-medium text-base -translate-y-[0.1rem] ">
              Lingo<span className="font-bold">Bot</span>
            </p>
          </div>
          <p className="font-light  lg:text-left text-center">
            LingoBot is your smart AI assistant for language detection,
            translation, and summarization. Translate seamlessly across
            languages with ease!
          </p>
        </div>

        <hr className="border-gray-700 my-1  max-w-[80%] mx-auto" />
        <p className="text-xs text-center my-1">
          &copy; {new Date().getFullYear()} Lingo
          <span className="font-bold">Bot</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
