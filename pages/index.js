import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Landing from "../components/Home/Landing";
import Schedule from "../components/Schedule";
import FAQS from "../components/FAQS";
import Domains from "../components/Home/Domains";
import Wihts from "../components/Home/Wihts";
import Journey from "../components/Home/Journey";
import Preloader from "../components/Home/Preloader";
import Venue from "../components/Home/Venue";
import Sponsor from "../components/Sponsor";
import CountdownTimer from "../components/CountdownTimer";
import "animate.css";

const targetDate = "2024-08-29T09:59:59"; // Replace with your target date

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    import("wow.js").then((WOW) => {
      new WOW.default().init();
    });
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <Layout>
        {/* Animation */}
        <Preloader />
        <Landing />
        {isMounted && <CountdownTimer targetDate={targetDate} />}
        {/* About */}
        <Wihts />
        <Journey />
        <Domains />
        <Schedule />
        <Venue />
        <Sponsor />
        <FAQS />
      </Layout>
    </div>
  );
};

export default Index;
