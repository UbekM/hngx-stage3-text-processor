/** @format */
"use client";

import Image from "next/image";
import { Send } from "lucide-react";
import Link from "next/link";
import ButtonSmall from "../components/buttonSmall";
import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = () => {
    setSubmittedMessage(message);
    setMessage("");
    if (message.length > 150) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-screen bg-[#111621] overflow-hidden">
      {/* HEADER */}
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

      {/* MAIN CONTENT */}
      <main className="flex flex-col items-center pt-1 lg:pt-3 lg:px-20 w-full flex-grow bg-[#111621] mx-20 justify-between overflow-auto overflow-x-hidden custom-scrollbar">
        {/* OUTPUT CONTENT */}
        {/* USER TYPED CONTENT */}
        <div className="h-full text-black flex flex-col items-end w-full px-4 lg:px-0 lg:w-4/5">
          <div
            className={`${
              submittedMessage ? "block" : "hidden"
            } py-[.6rem] text-[0.9rem] px-3 rounded-s-2xl rounded-b-2xl lg:max-w-[60%] bg-slate-300 `}
          >
            <p className={`break-words text-left `}>{submittedMessage}</p>
          </div>
          <p className="text-right text-xs px-2 text-white p-1 w-full mb-1 ">
            <span className="text-[#5ad9fc] font-medium">
              Detected Language:
            </span>{" "}
            English
          </p>
          {/* BUTTONS */}
          <div className="md:flex block lg:space-y-0 space-y-2 gap-3 pb-[1rem] items-center justify-center">
            <ButtonSmall text="Summarize" disabled={disabled} />
            <div className="flex gap-1 items-center bg-[#0D101B] p-1 rounded-xl">
              <select
                name=""
                id=""
                className="flex w-full rounded-lg min-w-fit px-2 font-light text-xs bg-[#0D101B] text-white border-[#5ad9fc] border py-[0.37rem] hover:cursor-pointer focus:border-2"
              >
                <option value="">English (en)</option>
                <option value="">Portuguese (pt)</option>
                <option value="">Spanish (es)</option>
                <option value="">Russian (ru)</option>
                <option value="">Turkish (tr)</option>
                <option value="">French (fr)</option>
              </select>
              <ButtonSmall text="Translate" disabled={false} />
            </div>
          </div>

          {/* RESULT */}
          <div className="w-full text-white mb-5 lg:mt-4 mt-2 pb-44 lg:px-6 px-3 rounded-md  ">
            <p className="text-left text-[1rem] font-light">
              Hello Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Itaque accusamus consequuntur cupiditate pariatur! Ea, tempore
              quam facere vel veritatis voluptatem vitae blanditiis id. Laborum,
              dicta deleniti! Similique omnis ex reprehenderit at recusandae est
              debitis commodi fuga, deserunt dicta! Blanditiis qui quasi fugiat
              molestias! Voluptatibus consequatur ullam illum doloremque
              excepturi assumenda harum libero error cumque eveniet voluptas
              ipsa minus nihil iure deleniti repellendus exercitationem quo
              optio, pariatur explicabo rerum cum dicta at iste. Voluptatem
              numquam porro aliquam dolore id dignissimos quasi dicta inventore.
              Ut tenetur excepturi, cum est culpa cupiditate sapiente repellat
              voluptates fugiat modi officiis ratione nisi quod iste, numquam,
              ullam iusto natus libero quas doloribus cumque vitae! Voluptate,
              laudantium. Nulla quasi labore veniam quae nisi aspernatur iure
              animi eveniet soluta. Exercitationem, minus omnis. Tenetur quasi
              id, cum est enim error, qui neque architecto, animi quam at. Eius
              possimus numquam eum hic cupiditate voluptas sapiente quasi culpa.
              Soluta inventore, magni earum delectus nobis, voluptas voluptate
              quas exercitationem quo nam est eveniet illo minima ad, accusamus
              repellendus corporis modi molestiae officia esse quia sequi. Eum
              rerum consequatur dicta vero natus repudiandae, nulla maiores
              temporibus ipsa cupiditate ullam at laudantium sint tempora
              inventore nobis odit maxime. Eaque id non suscipit consequuntur
              blanditiis cumque velit in consectetur corporis voluptate ea ab
              pariatur libero, nulla voluptatem commodi distinctio repudiandae
              earum doloremque, facilis ad, tenetur nostrum aut? Modi, assumenda
              nostrum odit sint perferendis nesciunt nihil cumque odio magnam
              voluptatibus, illo quod, tenetur sequi veritatis ab? Aperiam
              tenetur dolores earum quas amet dolore laudantium voluptates nam
              vel! Eligendi nemo doloribus fugiat, quod enim nesciunt nam
              numquam asperiores error in. Cum veniam perspiciatis amet animi
              quod soluta hic nam sint impedit ut, earum aspernatur nemo ipsum
              officiis odio asperiores. Suscipit hic nam reprehenderit, aliquid
              totam tempore expedita sed laudantium dolorem vitae deleniti fugit
              odio debitis impedit ea atque, ullam aperiam quaerat porro earum
              repellendus iusto. Eveniet corrupti cupiditate laborum facere modi
              odit nobis ullam tenetur maxime aut sint ab, fugit in nam officia
              quam aspernatur dolores id minima maiores. Officiis repudiandae
              nobis recusandae numquam harum impedit odit exercitationem tempora
              iste quis minus quos asperiores totam possimus ratione aliquid,
              suscipit porro rem, aliquam eum cum deleniti error ad eligendi.
              Neque dignissimos cupiditate quasi possimus architecto quod. Esse
              consequatur maiores quaerat adipisci dolor ipsa sint
              necessitatibus quisquam ea cum eveniet harum alias odit suscipit
              cupiditate dicta similique impedit quo vel illo, unde, animi
              debitis perferendis? Unde exercitationem tempora illo sequi
              adipisci, animi, id itaque dicta pariatur impedit officiis.
              Aspernatur quam non odit officiis similique, eveniet sit deserunt
              placeat deleniti. Consequuntur eaque nihil nulla nostrum excepturi
              debitis numquam illo fugit eligendi soluta quidem cupiditate et
              odio aliquam quae ipsam asperiores doloribus modi provident nisi
              unde, reprehenderit nemo. Vel nulla aperiam necessitatibus
              excepturi voluptatum commodi eligendi architecto accusamus ipsum
              repellat ipsa consectetur debitis accusantium impedit, explicabo
              officiis minus nobis pariatur magni? Pariatur, assumenda fugit,
              iusto possimus cupiditate rem suscipit aliquid laborum omnis
              quibusdam deleniti nobis quae? Sint voluptatem velit quas, optio
              doloremque quidem asperiores eos quo sit nulla. Facere, harum
              magnam.
            </p>
          </div>
        </div>

        {/* TEXTAREA */}
        <div className="absolute -bottom-10 mb-3 w-11/12 lg:w-4/5 h-40 mx-20 lg:px-20 ">
          <div className="relative">
            <textarea
              name=""
              id=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-xl bg-[#0c101a] focus:border-2 outline-none w-full h-[7.2rem] p-4 resize-none border border-[#5ad9fc]  focus:from-[#5ad9fc] focus:to-[#4067f1] text-sm"
              placeholder="Type Message of more than 150 Characters"
              rows={1}
              cols={30}
            ></textarea>
            <div
              className="absolute bottom-4 right-3  rounded-xl lg:w-10 lg:h-10 w-10 h-10 bg-gradient-to-r from-[#63D7F6] to-[#5376F6] flex justify-center items-center hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#4067f1] hover:to-[#5ad9fc]"
              onClick={handleSubmit}
            >
              <Send className="text-[#050C1D] lg:w-5 lg:h-5 w-5 " />
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      {/* <footer className="text-sm py-3 pb-4 bg-[#040d1d] w-full">
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
      </footer> */}
    </div>
  );
}
