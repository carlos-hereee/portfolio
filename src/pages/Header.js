import Social from "../components/Social";
import Ch04937 from "./Ch04937";

const Header = () => (
  <header className="header">
    <div className="header__svg">
      <Ch04937 />
      <h1 className="header__title">Carlos Hernandez</h1>
    </div>
    <Social />
  </header>
);
export default Header;
