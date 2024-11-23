import { useRouter } from "next/router";
import Link from 'next/link'
import Image from "next/image";
// import styles from "./page.module.css";
import Index from './pages/index'
import NavBar from './components/nav-bar'
import Slider from './components/slider'



export default function Home() {
  return (
    <main>
    
      <Slider />
    

    </main>
  );
}


