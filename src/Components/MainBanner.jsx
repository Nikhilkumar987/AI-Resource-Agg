import React from 'react';

import Dots from './Dots.jsx';
import Button from './Button.jsx';
import TargetCursor from './TargetCursor.jsx';
const MainBanner = () => {
  return (
    <div className="relative h-[500px] overflow-hidden bg-black justify-center">

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


      {/* Overlay content (text or buttons) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-4xl font-bold drop-shadow-lg">WELCOME TO AI RESOURCE AGGERATOR</h1>
        <p className="mt-2 text-lg drop-shadow-md">AI CREATE TO HELP YOU LEARN FAST</p>
       <div className=' flex justify-center mt-30 gap-10'>
         <Button text="Get Started"  />
          <Button text="See Docs" />
       </div>
      </div>

    </div>
  );
};

export default MainBanner;
