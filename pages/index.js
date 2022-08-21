import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Trainers from "../components/Trainers";
import Brands from "../components/Brands";

export default function Home() {
  

  return (
    <div>
      <Head>
        <title>FitMe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <Brands />
      <Trainers />
    </div>
  );
}
