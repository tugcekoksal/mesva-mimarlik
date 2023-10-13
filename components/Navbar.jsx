import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import Image from "next/image";
import beyaz from "../public/logo/beyaz-logo.png";
import siyah from "../public/logo/siyah-logo.png";

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [logo, setLogo] = useState(beyaz);
  const [navLine, setNavLine] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const getHoverColor = () => {
    if (router.pathname === "/") {
      return " hover:font-semibold";
    } else {
      return "hover:font-semibold";
    }
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("white");
        setTextColor("black");
        setLogo(siyah);
        setNavLine(true);
      } else {
        setColor("transparent");

        if (router.pathname === "/" && window.scrollY <= 90) {
          setTextColor("white");
          setLogo(beyaz);
          setNavLine(false);
        }
      }
    };

    if (router.pathname === "/") {
      setTextColor("white");
      setLogo(beyaz);
      setNavLine(false);
    } else {
      setTextColor("black");
      setLogo(siyah);
      setNavLine(false);
    }
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, [router.pathname]);

  return (
    <section
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between  items-center p-4 text-white">
        <Link href={"/"}>
          <Image
            src={logo}
            width={120}
            height={50}
            alt="logo"
            className="mt-4"
          ></Image>
        </Link>

        <ul
          style={{ color: `${textColor} ` }}
          className={`hidden sm:flex ${navLine ? "navbar-links" : ""}`}
        >
          <li
            className={`p-4 ${getHoverColor()} ${
              router.pathname === "/" ? "font-semibold" : ""
            }`}
          >
            <Link href={"/"}>Ana Sayfa</Link>
          </li>
          <li
            className={`p-4 ${getHoverColor()} ${
              router.pathname === "/hakkinda" ? "font-semibold" : ""
            }`}
          >
            <Link href={"/hakkinda"}>Biz Kimiz ?</Link>
          </li>
          <li
            className={`p-4 ${getHoverColor()} ${
              router.pathname === "/projeler" ? "font-semibold" : ""
            }`}
          >
            <Link href={"/projeler"}>Projeler</Link>
          </li>
          <li
            className={`p-4 ${getHoverColor()} ${
              router.pathname === "/iletisim" ? "font-semibold" : ""
            }`}
          >
            <Link href={"/iletisim"}>İletişim</Link>
          </li>
        </ul>
        {/* {mobile button} */}
        <div
          onClick={handleNav}
          className={`block sm:hidden z-[10]  ${navLine ? "navbar-links" : ""}`}
        >
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu style={{ color: `${textColor}` }} size={20} />
          )}
        </div>
        {/* {mobile menu} */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-[0] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 "
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 "
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href={"/"}>Ana Sayfa</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              {" "}
              <Link href={"/hakkinda"}>Biz Kimiz ?</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href={"/projeler"}>Projeler</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href={"/iletisim"}>İletişim</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
