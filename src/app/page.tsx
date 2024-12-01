import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
// import styles from "./page.module.css";
import Index from "./pages/index";
import NavBar from "./components/nav-bar";
import Slider from "./components/slider";
import Banner from "./components/banner";
import WhyChoose from "./components/why-choose";
import About from "./components/about";
import Services from "./components/services";
import Contact from './components/contact';

export default function Home() {
  return (
    <main>
      <div>
        {/* <Slider /> */}
        <Banner />
        <WhyChoose />
        <About />
        <Services />
        <Contact />
      </div>
    </main>
  );
}
