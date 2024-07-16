import React, { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";

const Landing = () => {
  const [title, setTitle] = useState("PLUNDER THE CODE, CONQUER THE QUEST");
  let idx = 0;
  let direction = 1;
  const animationDelay = 100; // milliseconds
  const pauseDelay = 2000; // milliseconds

  const writeText = () => {
    if (direction === 1) {
      setTitle(title.slice(0, idx));
      idx++;
      if (idx > title.length) {
        direction = -1;
        idx = title.length;
        setTimeout(writeText, pauseDelay);
        return;
      }
    } else if (direction === -1) {
      setTitle(title.slice(0, idx));
      idx--;
      if (idx < 0) {
        direction = 1;
        idx = 0;
        setTimeout(writeText, pauseDelay);
        return;
      }
    }

    setTimeout(writeText, animationDelay);
  };

  useEffect(() => {
    writeText();
  }, []);

  return (
    <section id="home" className="home" style={{ minHeight: "100vh", color: "#fff", fontFamily: "'Pirata One', cursive" }}>
      <div className="scroll-image"></div>
      <div className="cost1">
        <Image src="/images/pirates/pirate01.png" alt="NFC3" width={500} height={500} />
      </div>
      <div className="logo-div">
        <div className="logo-home">
          <Image src="/images/lol.png" alt="Need For Code 3.0 Hackathon Constellation" width={100} height={100} priority />
        </div>
        <p className="title" id="title">{title}</p>
        <br />
        <br />
        <p style={{ marginTop: "0" }}>29 - 30 August, 2024</p>
        <p className="venue-text">
          Thadomal Shahani Engineering College
          <br />
          Mumbai, Maharashtra
        </p>

        <div className="butHolder">
          {/* Devfolio Button */}
          <button type="button" className="Btn zinc-bg">
            <a href="https://need-for-code.devfolio.co/" target="_blank" rel="noopener noreferrer">
              <div className="gradient-mask blue-bg"></div>
              <span className="text">Devfolio</span>
            </a>
          </button>

          {/* Discord Button */}
          {/* <button type="button" className="Btn zinc-bg">
            <a href="https://discord.gg/FJKTSgdxPX" target="_blank" rel="noopener noreferrer">
              <div className="gradient-mask blue-bg"></div>
              <span className="text">Discord</span>
            </a>
          </button> */}
        </div>
      </div>
      <div className="cost2">
        <Image src="/images/pirates/pirate02.png" alt="Hack the space Hackathon Constellation" width={500} height={500} />
      </div>
      <Script src="https://apply.devfolio.co/v2/sdk.js" async defer />
    </section>
  );
};

export default Landing;
