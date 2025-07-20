import React from "react";
import NavBar from "../Components/NavBar";
import MainBanner from "../Components/MainBanner";
import MagicBento from "../Components/MagicBento";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="bg-black w-screen min-h-screen overflow-x-hidden px-4 sm:px-10 md:px-20 py-6 sm:py-10">
      
      {/* Nav */}
      <NavBar />

      {/* Hero Section */}
      <MainBanner />

      {/* Optional Centered Content */}
      <div className="flex justify-center mt-10 text-white/90">
        {/* Insert <SplitText /> or heading if needed */}
      </div>

      {/* Text below main banner */}
      <div className="mt-8 text-center text-white font-semibold tracking-wide">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">ZERO COST, ALL THE COOL</h1>
        <h3 className="text-sm sm:text-base text-gray-400 mt-2">Everything you need to flair your learning</h3>
      </div>

      {/* MagicBento section */}
      <div className="flex justify-center items-center mt-10 w-full gap-5">
 
    <MagicBento 
      textAutoHide={true}
      enableStars={true}
      enableSpotlight={true}
      enableBorderGlow={true}
      enableTilt={true}
      enableMagnetism={true}
      clickEffect={true}
      spotlightRadius={400}
      particleCount={20}
      glowColor="132, 0, 255"
    />
</div>
{/*  Last card */}

    <div className="flex justify-center items-center py-12 px-4 sm:px-8">
      <div className="bg-[#8f4be6] rounded-2xl w-full max-w-5xl text-center p-10 sm:p-16 text-white shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
         START EXPLORING<span className="font-bold"> AI AGGERATOR</span>
        </h2>
        <p className="text-lg sm:text-xl opacity-90 mb-8">
          ROADMAP, TOPIC-WISE-LIST, AND MORE .. – IT'S ALL HERE
        </p>
        <button className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#8f4be6] transition duration-300">
          Get Started
        </button>
      </div>
    </div>


      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
