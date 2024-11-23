import React from "react";
import Link from "next/link";
import style from "../../styles/navbar.module.scss";

export default function NavBar() {
  return (
    <>
      <div className={style.container}>
        <div>
          <Link href="/" >
            
            <>TechVhile</>
          </Link>
        </div>
        <div className= {style.navBarOptions}>
        <Link href="/">
          
            <h4>Home</h4>
          </Link>
          <Link href="/about" passHref>
            <h4>About</h4>
          </Link>
          <Link href="/service" passHref>
            
            <h4>Service</h4>
          </Link>
          <Link href="/" passHref>
            < div className={style.contact}>Contact</div>
          </Link>
          
        </div>
      </div>
    </>
  );
}
