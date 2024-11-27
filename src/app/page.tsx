import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
// import styles from "./page.module.css";
import Index from "./pages/index";
import NavBar from "./components/nav-bar";
import Slider from "./components/slider";
import Banner from "./components/banner";
import WhyChoose from "./components/why-choose";
import About from "./components/about"

export default function Home() {
  return (
    <main>
      <div>
        {/* <Slider /> */}
        <Banner />
        <WhyChoose />
        <About />
      </div>
    </main>
  );
}
