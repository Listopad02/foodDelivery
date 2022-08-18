import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Box, IconButton, Badge } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Link from "next/link"
import cartImg from "../public/images/cart.png";
import { useRouter } from "next/router";

function Cart() {
  const [cart, setCart] = useState(false);
  const order = useSelector((state: RootState) => state.order);
  const router = useRouter();

  useEffect(() => {
    const cartElem: HTMLElement | null = document.getElementById("cartElem");
    const back: HTMLElement | null = document.getElementById("back");
    if (cartElem && back) {
      cartElem.style.cssText =
        window.pageYOffset < back.getBoundingClientRect().height + 85
          ? `position: absolute; left:0; top:${
              back.getBoundingClientRect().height + 85
            }px; border-radius: 0 15px 15px 0;`
          : "position: fixed; ";

      window.addEventListener("scroll", () => {       
        cartElem.style.cssText =
          window.pageYOffset < back.getBoundingClientRect().height + 85
            ? `position: absolute; left:0; top:${
                back.getBoundingClientRect().height + 85
              }px; border-radius: 0 15px 15px 0;`
            : "position: fixed; ";       
      });
    }
  }, [cart]);

  let count: number = 0;
  if (Object.values(order).length > 0) {
    count = Object.values(order).reduce((a: number, b: number): number => {
      return a + b;
    });
  }

  !cart && count > 0
    ? setCart(true)
    : cart && count === 0
    ? setCart(false)
    : false;

  const handleClick = (e: any): void => {
    e.preventDefault();
    router.push("/cart");
  };

  return (
    <CSSTransition
      in={cart}
      timeout={200}
      classNames="cart"
      unmountOnExit
      mountOnEnter
    >
      <Box id="cartElem">
        <IconButton>
          <Badge badgeContent={count} color="primary">
            <ShoppingBasketIcon
              color="primary"
              fontSize="large"
              onClick={handleClick}
            />
          </Badge>
        </IconButton>
      </Box>
    </CSSTransition>
  );
}
export default Cart;
