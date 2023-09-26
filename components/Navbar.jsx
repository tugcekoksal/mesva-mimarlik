import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

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
      } else {
        setColor("transparent");
        if (router.pathname === "/") {
          setTextColor("white");
        }
      }
    };

    if (router.pathname === "/") {
      setTextColor("white");
    } else {
      setTextColor("black");
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
          {" "}
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            MesVA
          </h1>
        </Link>

        <ul style={{ color: `${textColor} ` }} className="hidden sm:flex">
          <li className={`p-4 ${getHoverColor()}`}>
            <Link href={"/"}>Ana Sayfa</Link>
          </li>
          <li className={`p-4 ${getHoverColor()}`}>
            <Link href={"/hakkinda"}>Ne Yapıyoruz</Link>
          </li>
          <li className={`p-4 ${getHoverColor()}`}>
            <Link href={"/projeler"}>Projeler</Link>
          </li>
          <li className={`p-4 ${getHoverColor()}`}>
            <Link href={"/iletisim"}>İletişim</Link>
          </li>
        </ul>
        {/* {mobile button} */}
        <div onClick={handleNav} className="block sm:hidden z-[10] ">
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
              ? "sm:hidden absolute top-0 left-[0] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
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
              <Link href={"/hakkinda"}>Ne Yapıyoruz</Link>
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
  x;
};

export default Navbar;
