'use client'
import Image from "next/image";
import Link from "next/link";
import Right from "../icons/Right";
import Down from "../icons/Down";
import Up from "../icons/Up";
import { useState } from "react";
import styles from "./header.module.css";

export default function Hero() {
  const [showContent, setShowContent] = useState(false);  

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  

  return (
    <section id="home" >
      <div className="h-20">

      </div>
      <div className="md:mt-4 flex flex-col md:flex-row md:items-center ">
        <div className="text-gray-200 py-8 md:py-12 flex flex-col items-center text-center md:w-1/2 ">
          <h1 className="text-6xl">
            Hello,<br />
          </h1>
            <h1 className="text-4xl mt-4 mb-4">
              I am<br />
            </h1>
            <span className="font-semibold text-6xl">
              Lucas Barragana
            </span>
          
          <p className="my-6 text-2xl text-orange-400 font-semibold">
            I am a Front-End Developer
          </p>
          <div className="flex gap-4 text-sm">
            <Link id="btnToContact" href={'/#contact'} className="flex justify-center bg-primary uppercase bold flex items-center gap-2 text-gray-200 px-4 py-2 rounded-full bg-blue-900">
              Lets work together
              <Right />
            </Link>
          </div>
        </div>
        <div className="relative hidden md:block md:w-1/2 ">
          <Image  src={'/bear-dev.png'}  alt='logo' width={400}  height={22} className={styles.image}/>
        </div>
      </div>

      <div className="">
        <blockquote className="flex justify-center bg-primary bold flex items-center gap-2 text-gray-200 px-4 py-2 italic">
        &quot;Between lines of code and lonely hours, the programmer finds themselves in a state of creative hibernation, where the mind opens up to innovation and inspiration.&quot; - Lucas Barragana
        </blockquote>
      </div>

      <div className="relative flex justify-center items-center mt-5">
        <span className="absolute left-0 right-0 bg-primary bold flex items-center text-gray-200 bg-gray-800 px-4 py-2 rounded-full z-0">
        </span>
        <button id="btnAbout" onClick={toggleContent} 
        className="relative z-10 flex justify-center font-semibold items-center text-gray-200 rounded-full px-4 py-3 gap-2 bg-gray-800 transition duration-300 ease-in-out transform">
          More about me
          <Down />
        </button>
      </div>

      {showContent && (
        <div className="bg-gray-800 p-10 -mt-8  rounded-lg">
          <h1 className="text-4xl font-semibold text-white mb-5">Extras</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 rounded-lg px-10 py-5" >
              <h3 className=" font-semibold mb-2 text-orange-500">About me</h3>
              <p className="font-semibold text-blue-900">Passionate about technology. Constantly studying, learning new technologies, and improving in the ones that I identify myself the most.</p>
            </div>

            <div className="bg-gray-200 rounded-lg  px-10 py-5">
              <h3 className="text-orange-500 font-semibold mb-2 ">Languages</h3>
              <p className="font-semibold text-blue-900">English - Intermediate fluency</p>
            </div>

            <div className="bg-gray-200 rounded-lg px-10 py-5">
              <h3 className="text-orange-500 font-semibold mb-2">Academic Education:</h3>
              <h4 className="font-semibold text-blue-900">Analysis and Systems Development</h4>
              <span  className="font-semibold text-blue-900">Anhanguera University:</span><br />
              <span className="text-blue-900"> - Start: 02/23</span><br />
              <span className="text-blue-900"> - Expected Graduation: 06/25</span>
            </div>

            <div className="bg-gray-200 rounded-lg px-10 py-5">
              <h3 className="text-orange-500 font-semibold mb-2">Extra-curricular Education:</h3>
              <ul className="font-semibold text-blue-900">
                <li>Node.js - 38h</li>
                <li>React.js - 30h</li>
                <li>Next.js - 25h</li>
                <li>Angular - 36h</li>
                <li>MongoDb - 19h</li>
              </ul>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center mt-5">
            <button id="lessAbout" onClick={toggleContent} className="relative z-10 flex justify-center font-semibold items-center text-blue-900 rounded-full px-4 py-3 gap-2 bg-gray-200 transition duration-300 ease-in-out ">
              Less about me
              <Up />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export function useToggleContent() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return { showContent, toggleContent };
}