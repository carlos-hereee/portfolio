import { useState } from "react";
import Logo from "../components/Logo";

const Header = () => {
  const [active, setActive] = useState("");

  const downloadCV = () => {
    console.log("download cv");
  };
  return (
    <div className="header">
      <div className="header-logo">
        <Logo />
      </div>
      <nav className="navbar-nav">
        <button className="nav-item" onClick={() => setActive("projects")}>
          <a
            className={active === "projects" ? `nav-link-active` : "nav-link"}
            href="#projects">
            Projects
          </a>
        </button>
        <button className="nav-item" onClick={() => setActive("about")}>
          <a
            className={active === "about" ? `nav-link-active` : "nav-link"}
            href="#about">
            About
          </a>
        </button>
        <button className="nav-item" onClick={() => setActive("contact")}>
          <a
            className={active === "contact" ? `nav-link-active` : "nav-link"}
            href="#contact-me">
            Contact Me
          </a>
        </button>
        <button className="nav-item" onClick={() => downloadCV()}>
          <a className="nav-link" href="#Download-CV">
            DownLoad CV
          </a>
        </button>
      </nav>
    </div>
  );
};
export default Header;
