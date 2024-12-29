"use client";
import { useState } from "react";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import Image from "next/image";
// import { Sling  as Hamburger } from 'hamburger-react'

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
        <div>
          <Link href="/">
            <Image src={Logo} width={160} alt="computer Image" />
          </Link>
        </div>
        <div
          className={isVisible ? style.mobileContentView : style.navBarOptions}
        >
          {/* <div>
            <SlMenu className={style.menuBug} />
          </div> */}
          <Link href="/">
            <h4>Home</h4>
          </Link>
          <Link href="/about" passHref>
            <h4>About</h4>
          </Link>
          <Link href="/service" passHref>
            <h4>Service</h4>
          </Link>
          <Link href="/blog" passHref>
            <h4>Blog</h4>
          </Link>
          <Link href="/" passHref>
            <div className={style.contact}>Contact</div>
          </Link>
        </div>
        <div onClick={handleToggle} className={style.menuDiv}>
          {/* <SlMenu className={style.menuBug} /> */}
          <SlMenu />
        </div>
      </div>
    </div>
  );
}
