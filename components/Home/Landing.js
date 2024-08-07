// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Script from "next/script";

// const Landing = () => {
//   const [title, setTitle] = useState("MAY THE CODE BE WITH YOU...");
//   let idx = 0;
//   let direction = 1;
//   let animationDelay = 100; // milliseconds
//   let pauseDelay = 2000; // milliseconds
//   function writeText() {
//     if (direction === 1) {
//       setTitle(title.slice(0, idx));
//       idx++;
//       if (idx > title.length) {
//         direction = -1;
//         idx = title.length;
//         setTimeout(writeText, pauseDelay);
//         return;
//       }
//     } else if (direction === -1) {
//       setTitle(title.slice(0, idx));
//       idx--;
//       if (idx < 0) {
//         direction = 1;
//         idx = 0;
//         setTimeout(writeText, pauseDelay);
//         return;
//       }
//     }

//     setTimeout(writeText, animationDelay);
//   }
//   useEffect(() => writeText(), []);

//   return (
//     <section
//       id="home"
//       className="home"
//       style={{ minHeight: "100vh", color: "#fff" }}
//     >
//       <div className="cost1">
//         <img src="./images/home/constellation1.png" alt="NFC2" />
//       </div>
//       <div className="logo-div">
//         <div className="logo-home">
//           <img
//             src="./images/nfc_logo.png"
//             alt="Need For Code 2.0 Hackathon Constellation"
//             priority={true}
//             sizes="100%"
//             width={100}
//             height={100}
//           />
//         </div>
//         {/* <p className="title" id="title">
//           {title}
//         </p> */}
//         <br />
//         <br />
//         <p style={{ marginTop: "0" }}>15 - 16 SEPTEMBER, 2023</p>
//         <p className="venue-text">
//           Thadomal Shahani Engineering College
//           <br />
//           Mumbai, Maharashtra
//         </p>

//         <div className="butHolder">
//           {/* Devfolio Button */}
//           <button type="button" className="Btn zinc-bg">
//             <a href="https://need-for-code.devfolio.co/" target="_blank">
//               <div className="gradient-mask blue-bg">
//                 {/* <img src=".images/sponsor/Square.png" alt="Dev logo" style={{height:50}} /> */}
//               </div>
//               {/* <svg
//                 name="logo-discord"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="ionicon icon"
//                 viewBox="0 0 512 512"
//               >
//                 <path d="M464 66.52A50 50 0 00414.12 17L97.64 16A49.65 49.65 0 0048 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 01-27.85 14.25 173.31 173.31 0 01-35.11 10.39 170.05 170.05 0 01-62.72-.24 184.45 184.45 0 01-35.59-10.4 141.46 141.46 0 01-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 014.12-.49 205.62 205.62 0 0148.91-.48 201.62 201.62 0 0172.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z" />
//                 <path d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zM300.43 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z" />
//               </svg> */}

//               <span className="text" style={{ color: "white", fontSize: 16 }}>
//                 Apply with Devfolio
//               </span>
//             </a>
//           </button>

//           {/* Discord Button */}
//           {/* <button type="button" className="Btn zinc-bg">
//             <a href="https://discord.gg/FJKTSgdxPX" target="_blank">
//               <div className="gradient-mask blue-bg"></div>

//               <svg
//                 name="logo-discord"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="ionicon icon"
//                 viewBox="0 0 512 512"
//               >
//                 <path d="M464 66.52A50 50 0 00414.12 17L97.64 16A49.65 49.65 0 0048 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 01-27.85 14.25 173.31 173.31 0 01-35.11 10.39 170.05 170.05 0 01-62.72-.24 184.45 184.45 0 01-35.59-10.4 141.46 141.46 0 01-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 014.12-.49 205.62 205.62 0 0148.91-.48 201.62 201.62 0 0172.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z" />
//                 <path d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zM300.43 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z" />
//               </svg>

//               <span className="text">Discord</span>
//             </a>
//           </button> */}
//         </div>
//       </div>
//       <div className="cost2">
//         <img
//           src="./images/home/constellation2.png"
//           alt="Hack the space Hackathon Constellation"
//         />
//       </div>
//       <Script src=".https://apply.devfolio.co/v2/sdk.js" async defer />
//     </section>
//   );
// };

// export default Landing;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import styles from './Landing.module.css'; // Assuming you are using CSS Modules

const Landing = () => {
  const [title, setTitle] = useState("MAY THE CODE BE WITH YOU...");
  let idx = 0;
  let direction = 1;
  let animationDelay = 100; // milliseconds
  let pauseDelay = 2000; // milliseconds

  function writeText() {
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
  }

  useEffect(() => {
    writeText();
  }, []);

  return (
    <section id="home" className={styles.home}>
      <video className={styles.backgroundVideo} autoPlay loop muted>
        <source src="/images/video/Website Visuals.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">

      </div>
     
      <div className={styles.overlayContent}>
        {/* <div className={`${styles.cost1} ${styles.animateImage}`}>
          <img src="./images/home/constellation1.png" alt="NFC2" />
        </div> */}
      
  <style jsx>{`
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .rotating-image {
      animation: rotate 2s linear infinite;
    }
  `}</style>
  <div>
  <div className="hollow">
          <h1 className="bback">NEED</h1>
          <div className="image-text-group bback">
            <h1 style={{ marginRight: "-15px" }}>F</h1>
            <img
              src="/images/pirates/wheelnew.png"
              alt="NFC3"
              className="rotating-image"
            />
            <h1 style={{ marginLeft: "-25px" }}>R</h1>
          </div>
          <h1 className="bback">CODE 3.0</h1>
        </div>
          <br />
          <br />
          <p style={{ marginTop: "0" }}>29 - 30 AUGUST, 2024</p>
          <p className="venue-text">
            Thadomal Shahani Engineering College
            <br />
            Mumbai, Maharashtra
          </p>

          <div className="butHolder">
            <button type="button" className="Btn zinc-bg">
              <a href="" target="_blank">
                <div className="gradient-mask blue-bg"></div>
                <span className="text" style={{ color: "white", fontSize: 16 }}>
                  Apply with Devfolio
                </span>
              </a>
            </button>
          </div>
        </div>
        <div className={`${styles.cost2} ${styles.animateImage}`}>
          {/* <img
            src="./images/home/constellation2.png"
            alt="Hack the space Hackathon Constellation"
          /> */}
        </div>
      </div>
      <Script src=".https://apply.devfolio.co/v2/sdk.js" async defer />
    </section>
  );
};

export default Landing;
