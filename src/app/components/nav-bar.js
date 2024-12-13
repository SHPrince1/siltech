"use client";
import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";

import style from "../../styles/navbar.module.scss";
import Logo from "../../images/essagelogo-removebg-preview.png";

export default function NavBar() {
  const [isVisible, setIsVissible] = useState(false);
  const handleToggle = () => {
    // console.log('hello')
    setIsVissible(!isVisible);
  };
  return (
    <div className={style.parentDiv}>
      <div className={style.container}>
        <button onClick={handleToggle} className={style.menuDiv}>
          MENU
        </button>
        <div>
          <Link href="/">
            <Image src={Logo} width={160} alt="computer Image" />
          </Link>
        </div>
        <div className={isVisible ? style.navBarOptions : style.hideContent}>
          <Link href="/">
            <h4>Home</h4>
          </Link>
          <Link href="/about" passHref>
            <h4>About</h4>
          </Link>
          <Link href="/service" passHref>
            <h4>Service</h4>
          </Link>
          <Link href="/service" passHref>
            <h4>Blog</h4>
          </Link>
          <Link href="/" passHref>
            <div className={style.contact}>Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
