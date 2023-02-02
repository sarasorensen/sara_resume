//libraries
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Menu left isOpen={false}>
        <a href="/" className="nav__link">
          Home
        </a>
      </Menu>
    </>
  );
};

export default Layout;
