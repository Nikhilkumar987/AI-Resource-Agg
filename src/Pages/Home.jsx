import React from "react";
import { Link } from "react-router-dom";
import MainBanner from "../Components/MainBanner";
import HomeNavBar from "../Components/HomeNavBar";
import CurvedLoop from "../Components/CurvedLoop";
import MagicBento from "../Components/MagicBento";
import SplashCursor from "../Components/SplashCursor";

function Home() {
  return (
    <div className="bg-black w-screen min-h-screen overflow-x-hidden px-4 sm:px-10 md:px-20 py-6 sm:py-0">
      
        {/* Navigation */}
        <HomeNavBar />

        {/* Hero Section */}
        <MainBanner />

        {/* Tagline */}
        <div className="mt-8 text-center text-white font-semibold tracking-wide">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            ZERO COST, ALL THE COOL
          </h1>
          <h3 className="text-sm sm:text-base text-gray-400 mt-2">
            Everything you need to flair your learning
          </h3>
        </div>

        {/* Magic Bento Cards */}
        <div className="flex justify-center items-center mt-20 w-full gap-5 scale-105 sm:scale-110 mb-20">
          <MagicBento
            textAutoHide
            enableStars
            enableSpotlight
            enableBorderGlow
            enableTilt
            enableMagnetism
            clickEffect
            spotlightRadius={400}
            particleCount={20}
            glowColor="132, 0, 255"
          />
        </div>

        {/* CTA Card */}
        <div className="flex justify-center items-center py-12 px-4 sm:px-8">
          <div className="bg-[#8f4be6] rounded-2xl w-full max-w-5xl text-center p-10 sm:p-16 text-white shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              START EXPLORING <span className="font-bold">AI AGGREGATOR</span>
            </h2>
            <p className="text-lg sm:text-xl opacity-90 mb-8">
              ROADMAP, TOPIC-WISE-LIST, AND MORE – IT'S ALL HERE
            </p>
            <Link to="/form">
              <button className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#8f4be6] transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        {/* <SplashCursor>
     {/* // Curved Loop Banner */}
          {/* <div className="flex justify-center items-center text-center mb-10">
          <CurvedLoop
            marqueeText="Be ✦ Smart ✦ With ✦ Aggri ✦"
            speed={3}
            curveAmount={500}
            interactive
            className="text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
          />
        </div>
      </SplashCursor>   */} 
    </div>
  );
}

export default Home;
