import Social from "../components/Social";
import ch04937 from "../assets/ch04937.svg";

const Header = () => (
  <header className="header">
    <div className="header__svg">
      <img src={ch04937} alt="ch04937 logo" />
      <h1 className="header__title">Carlos Hernandez</h1>
    </div>
    <Social />
  </header>
);
export default Header;
