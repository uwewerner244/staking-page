import React, { useEffect, useRef } from 'react';

const YourComponent: React.FC = () => {
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; //You can customize what letters it will cycle through
    const ctnt = "Toolkit"; // Your text goes here
    const speed = 50; // ms per frame
    const increment = 8; // frames per step. Must be >2

    const clen = ctnt.length;
    let si = 0;
    let stri = 0;
    let block = "";
    let fixed = "";

    // Call self x times, whole function wrapped in setTimeout
    (function rustle(i: number) {
      setTimeout(function () {
        if (--i) { rustle(i); }
        nextFrame(i);
        si = si + 1;
      }, speed);
    })(clen * increment + 1);

    function nextFrame(pos: number) {
      for (let i = 0; i < clen - stri; i++) {
        // Random number
        const num = Math.floor(Math.random() * theLetters.length);
        // Get random letter
        const letter = theLetters.charAt(num);
        block = block + letter;
      }
      if (si === (increment - 1)) {
        stri++;
      }
      if (si === increment) {
        // Add a letter; 
        // every speed*10 ms
        fixed = fixed + ctnt.charAt(stri - 1);
        si = 0;
      }
      if (outputRef.current) {
        outputRef.current.innerHTML = fixed + block;
      }
      block = "";
    }
  }, []);

  return <div ref={outputRef}></div>;
};

export default YourComponent;
