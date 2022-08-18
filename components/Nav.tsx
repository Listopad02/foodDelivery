import styles from "../styles/Nav.module.css";
import {
  Container,
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  Badge,
} from "@mui/material";
import { useRouter } from "next/router";
import shashlandiaRed from "../public/images/shashlandiaRed.png";
import shashlandiaBlack from "../public/images/shashlandiaBlack.png";
import cartRed from "../public/images/cartRed.png";
import cartBlack from "../public/images/cartBlack.png";
import menu from "../public/images/menu.png";
import { RootState } from "../redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const itemsMenu = [
  { name: "О нас", href: "/about" },
  { name: "Меню", href: "/menu" },
  { name: "Контакты", href: "/contacts" },
];

function Nav() {
  useEffect(() => {
    const nav: HTMLElement | null = document.getElementById("NavScroll");
    window.addEventListener("scroll", function (e) {
      if (window.pageYOffset > 0 && nav !== null) {
        nav.style.cssText =
          "height: 64px;  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px";
      } else if (nav !== null) {
        nav.style.cssText = "height: 78px";
      }
    });
  }, []);
  const order = useSelector((state: RootState) => state.order);
  const [drawer, setDrawer] = useState(false);
  const router = useRouter();

  let count: number = 0;
  if (Object.values(order).length > 0) {
    count = Object.values(order).reduce((a: number, b: number): number => {
      return a + b;
    });
  }

  const handleClick = (e: any): void => {
    e.preventDefault();
    router.push(e.target.href);
  };

  const toggleDrawer =
    (open: boolean) =>
    (event: any): void => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setDrawer(open);
    };

  return (
    <Box className={styles.container} id="NavScroll">
      <Container maxWidth="lg">
        <Box className={styles.nav}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {/* <img
              src={menu.src}
              alt="menu"
              width="33"
              height="15"
              onClick={toggleDrawer(!drawer)}
            /> */}
            <MenuIcon
              color={drawer ? "primary" : undefined}
              fontSize="large"
              onClick={toggleDrawer(!drawer)}
            />
            {/* <Image
            alt="menu"
            loader={() => menu.src}
            src={menu.src}
            width="33"
            height="15"
            onClick={toggleDrawer(true)}
          /> */}
          </Box>
          <Box
            className={styles.logo}
            sx={{
              flexGrow: { xs: 1, md: 0 },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box className={styles.tyteda}>
              <a href="https://tyteda.ru/" target="_blank" rel="noreferrer">
                TYT
                <br />
                EDA
              </a>
            </Box>
            <img
              src={
                router.asPath === "/"
                  ? shashlandiaRed.src
                  : shashlandiaBlack.src
              }
              alt="shashlandia"
              className={styles.shashlandia}
              onClick={() => router.push("/")}
            />
            {/* <Image
            onClick={() => router.push("/")}
            alt="shashlandia"
            loader={() =>
              router.asPath === "/" ? shashlandiaRed.src : shashlandiaBlack.src
            }
            src={
              router.asPath === "/" ? shashlandiaRed.src : shashlandiaBlack.src
            }
            width="157"
            height="52"
          /> */}
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            className={styles.menu}
          >
            {itemsMenu.map((item, i) => {
              return (
                <Box className={styles.item} key={i}>
                  <a
                    style={{
                      color:
                        router.asPath === item.href ? "#E70000" : "#222222",
                    }}
                    href={item.href}
                    onClick={handleClick}
                  >
                    {item.name}
                  </a>
                </Box>
              );
            })}
          </Box>
          <Box className={styles.logo}>
            <Badge badgeContent={count} color="primary">
              {/* <img
                src={router.asPath === "/cart" ? cartRed.src : cartBlack.src}
                alt="cart"
                width="33"
                height="33"
                onClick={() => router.push("/cart")}
              /> */}
              <ShoppingBasketIcon
                fontSize="large"
                color={router.asPath === "/cart" ? "primary" : undefined}
                onClick={() => router.push("/cart")}
              />
            </Badge>
            {/* <Badge badgeContent={count} color="primary">
            <Image
              onClick={() => router.push("/cart")}
              alt="cart"
              loader={() =>
                router.asPath === "/cart" ? cartRed.src : cartBlack.src
              }
              src={router.asPath === "/cart" ? cartRed.src : cartBlack.src}
              width="33"
              height="33"
            />
          </Badge> */}
          </Box>
        </Box>
      </Container>
      <Drawer anchor="left" open={drawer} onClose={toggleDrawer(false)}>
        <Box sx={{ marginTop: "78px" }}>
          {itemsMenu.map((item, i) => {
            return (
              <ListItem key={i} disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <a
                      style={{
                        color:
                          router.asPath === item.href ? "#E70000" : "#222222",
                      }}
                      href={item.href}
                      onClick={handleClick}
                    >
                      {item.name}
                    </a>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </Box>
      </Drawer>
    </Box>
  );
}

export default Nav;
