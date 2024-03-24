import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import './styles.css'; // Import the CSS file for dark and light mode styles
import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops, link }) => {
  const openInNewTab =
    link !== "#market" &&
    link !== "#about-us" &&
    link !== "#transactions";
  return (
    <li className={`mx-7 cursor-pointer ${classprops}`}>
      <a
        href={link}
        target={openInNewTab ? "_blank" : ""}
        rel={openInNewTab ? "noopener noreferrer" : ""}
        className="hover:text-blue-500"
      >
        {title}
      </a>
    </li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", isDarkMode);
  };

  return (
    <nav className={`w-full flex md:justify-center justify-between items-center p-4 ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="md:flex-[0.7] flex-initial justify-center items-center">
        <navbar id="home"></navbar>
        <img
          src={logo}
          alt="logo"
          className="w-60 cursor-pointer"
          id="logo"
        />
      </div>
      <ul className="text-BLACK text-arial font-bold md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[
          {
            title: "Market",
            link: "#market",
          },
          {
            title: "Transactions",
            link: "#transactions",
            target: "_blank",
          },
          {
            title: "KYC",
            link: "http://localhost:3001/menu.html",
          },
          {
            title: "Lending",
            link: "http://127.0.0.1:5500/mlsccoherence_Syndicate/mlsccoherence_Syndicate/p2pLending/frontend/index.html",
          },
          {
            title: "Tutorials",
            link: "https://support.metamask.io/hc/en-us/articles/360045901112",
            target: "_blank",
          },
          {
            title: "Contact Us",
            link: "#about-us",
          },
        ].map((item, index) => (
          <NavBarItem
            key={item.title + index}
            title={item.title}
            link={item.link}
          />
        ))}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={30}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={30}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {/* Toggle button for dark mode */}
        <button
          className="ml-4 bg-transparent border-none cursor-pointer"
          onClick={toggleTheme}
        >
          {isDarkMode ? "🌞" : "🌙"}
        </button>
      </div>
      {toggleMenu && (
        <ul
          className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
        >
          <li className="text-xl w-full my-2">
            <AiOutlineClose onClick={() => setToggleMenu(false)} />
          </li>
          {[
            {
              title: "Market",
              link: "#market",
            },
            {
              title: "Transactions",
              link: "#transactions",
            },
            {
              title: "Tutorials",
              link: "https://support.metamask.io/hc/en-us/articles/360045901112",
            },
            {
              title: "Contact Us",
              link: "#about-us",
            },
          ].map((item, index) => (
            <NavBarItem
              key={item.title + index}
              title={item.title}
              link={item.link}
              classprops="text-xl my-5"
            />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
