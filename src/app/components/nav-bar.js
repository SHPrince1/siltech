"use client";
import { useState,  useEffect, useRef} from "react";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import Image from "next/image";
// import { Sling  as Hamburger } from 'hamburger-react'

import style from "../../styles/navbar.module.scss";
import Logo from "../../images/essagelogo-removebg-preview.png";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  const handleLinkClick = () => {
    setIsVisible(false); // Close the menu when a link is clicked
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={style.parentDiv}>
      <div className={style.container} ref={menuRef}>
        <div>
          <Link href="/">
            <Image src={Logo} width={160} alt="Logo" />
          </Link>
        </div>
        <div
          className={isVisible ? style.mobileContentView : style.navBarOptions}
        >
          <Link href="/" onClick={handleLinkClick}>
            <h4>Home</h4>
          </Link>
          <Link href="/about" onClick={handleLinkClick}>
            <h4>About</h4>
          </Link>
          <Link href="/service" onClick={handleLinkClick}>
            <h4>Service</h4>
          </Link>
          <Link href="/blog" onClick={handleLinkClick}>
            <h4>Blog</h4>
          </Link>
          <Link href="/contact-us" onClick={handleLinkClick}>
            <div className={style.contact}>Contact</div>
          </Link>
        </div>
        <div onClick={handleToggle} className={style.menuDiv}>
          <SlMenu className={style.menuBug} />
        </div>
      </div>
    </div>
  );
};
