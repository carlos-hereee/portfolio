import logo from "../assets/silent-coding.svg";

const Logo = ({ size }) => (
  <img src={logo} alt="carlos-hernandez" className={`logo-${size}`} />
);
export default Logo;
