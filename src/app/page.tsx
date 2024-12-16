// import { useRouter } from "next/router";
// import Link from "next/link";
// import Image from "next/image";
// import styles from "./page.module.css";
// import Index from "./pages/index";
// import NavBar from "./components/nav-bar";
// import Slider from "./components/slider";
import Banner from "./components/home-page/banner";
import WhyChoose from "./components/home-page/why-choose";
import About from "./components/home-page/about";
import Services from "./components/home-page/services";
import Contact from './components/home-page/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <main>
      <div>
        {/* <Slider /> */}
        <Banner />
        <About />
        <Services />
        <WhyChoose />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
