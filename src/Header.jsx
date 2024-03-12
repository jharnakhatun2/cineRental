import { useContext, useState } from "react";
import Sun from "./assets/icons/sun.svg";
import Logo from "./assets/logo.svg";
import Notification from "./assets/ring.svg";
import Cart from "./assets/shopping-cart.svg";
import CartDetails from "./components/CartDetails";
import { MovieContext } from "./context/index.js";
export default function Header() {
  const [openCart, setOpenCart] = useState(false);
  const { cartData } = useContext(MovieContext);

  //Cart Modal add, open, close
  function handleOpenCart() {
    setOpenCart(true);
  }

  return (
    <>
      {openCart && <CartDetails onClose={() => setOpenCart(false)} />}
      {/* Begin header */}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width={139} height={26} alt="" />
          </a>
          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Notification} width={24} height={24} alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Sun} width={24} height={24} alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleOpenCart}
              >
                <img src={Cart} width={24} height={24} alt="" />
                {cartData.length > 0 && (
                  <span className="absolute top-[-16px] left-[20px] bg-[#12cf6f] rounded-full px-2">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* End Header */}
    </>
  );
}
