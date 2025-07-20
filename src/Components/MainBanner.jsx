import React from 'react';

import Dots from './Dots.jsx';
import Button from './Button.jsx';
import TargetCursor from './TargetCursor.jsx';
import { Link, NavLink } from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className="relative h-[500px] overflow-hidden bg-black justify-center">

      {/* Optional: TargetCursor for custom cursor */}
      {/* <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      /> */}

      <Dots
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-4xl font-bold drop-shadow-lg text-center px-4">
          WELCOME TO AI RESOURCE AGGREGATOR
        </h1>
        <p className="mt-2 text-lg drop-shadow-md text-center px-2">
          AI CREATED TO HELP YOU LEARN FAST
        </p>
        <div className="flex justify-center mt-10 gap-6">
          <Link to="/form"><Button text="Get Started" /></Link>
          <Link to="/docs"><Button text="See Docs" /></Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
