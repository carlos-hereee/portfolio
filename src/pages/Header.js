import { useState } from "react";
import Logo from "../components/Logo";
import resume from "../assets/CarlosHernandezResume.pdf";

const Header = () => {
  const [active, setActive] = useState("");
  const [burger, setBurger] = useState(false);

  const handleClick = (tab) => {
    setActive(tab);
    setBurger(false);
  };
  return (
    <>
      <div className="header-logo-hamburger" onClick={() => setBurger(!burger)}>
        <Logo />
      </div>
      <div className={burger ? `header-active` : "header"}>
        <div className="header-logo">
          <Logo />
        </div>
        <nav className="navbar-nav">
          <button className="nav-item" onClick={() => handleClick("projects")}>
            <a
              className={active === "projects" ? `nav-link-active` : "nav-link"}
              href="#projects">
              Projects
            </a>
          </button>
          <button className="nav-item" onClick={() => handleClick("about")}>
            <a
              className={active === "about" ? `nav-link-active` : "nav-link"}
              href="#about">
              About
            </a>
          </button>
          <button className="nav-item" onClick={() => handleClick("contact")}>
            <a
              className={active === "contact" ? `nav-link-active` : "nav-link"}
              href="#contact-me">
              Contact Me
            </a>
          </button>
          <li className="nav-item">
            <a
              className="nav-link"
              href={resume}
              download="CarlosHernandezResume.pdf">
              DownLoad CV
            </a>
          </li>
        </nav>
      </div>
    </>
  );
};
export default Header;
