import style from "./flipkartnav.module.css";
import logo from "./images/images.png";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
const FlipkartNav = () => {
  return (
    <nav>
      <aside className={style.logo}>
        <img src={logo} />
      </aside>
      <section className={style.searchContainer}> searchContainer </section>
      <ul>
        <li> <FaRegUserCircle /> login</li>
        <li> <MdOutlineShoppingCart /> cart</li>
        <li><CiShop/> become a seller</li>
        <li><IoMdMore/></li>
      </ul>
    </nav>
  );
};

export default FlipkartNav;
