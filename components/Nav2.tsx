import { Container, Box, ButtonGroup, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Nav.module.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../public/images/Logo.svg"
import logo2 from '../public/images/logo2.svg'

const itemsMenu = [
  { name: "Главная", href: "/" },
  { name: "О нас", href: "/about" },
  { name: "Оплата и доставка", href: '/payment' },
  { name: "Контакты", href: "/contacts" },
  { name: 'Вход', href: '/login' },
  { name: 'Регистрация', href: '/register' }
  // { name: "Политика конфиденциальности", href: "/policy" }
];

function Nav2() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const clickMenu = () => {
    setMenu(!menu);
  };

  const handleClick = (e: any): void => {
    e.preventDefault();
    router.push(e.target.href);
  };

  return (
    <>
      <Box className={styles.logo} style={{ display: router.pathname !== '/about' ? 'flex' : 'none' }}>
         <img className={styles.logo__image} style={{ display: menu ? 'none' : 'flex'}} src={router.pathname !== '/' ? logo.src : logo2.src} alt="logo" />
      </Box>
      <Box sx={{ position: "absolute", zIndex: "10000", padding: "10px", display: "flex", justifyContent: "space-between" }}>
        <CSSTransition
          in={!menu}
          timeout={200}
          classNames="nav"
          unmountOnExit
          mountOnEnter
        >
          <IconButton>
            <MenuIcon style={{ color: 'red' }} fontSize="large" onClick={clickMenu} />
          </IconButton>
        </CSSTransition>
      </Box>
      <CSSTransition
        in={menu}
        timeout={200}
        classNames="nav"
        unmountOnExit
        mountOnEnter
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: "10000",
            padding: "10px",
            width: "100%",
            backgroundColor: "rgba(0,0,0, 0.7)",
            boxShadow: 3,
          }}
        >
          <Box sx={{ position: "absolute" }}>
            <IconButton>
              <CloseIcon style={{ color: 'red' }} fontSize="large" onClick={clickMenu} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {itemsMenu.map((item, i) => {
              return (
                <Box key={i} sx={{ margin: "5px" }}>
                  <a
                    style={{
                      color: router.asPath === item.href ? "#E70000" : "white",
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
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              height: 51,
            }}
          >
            {itemsMenu.map((item, i) => {
              return (
                <Box key={i} sx={{ margin: "5px 10px" }}>
                  <a
                    style={{
                      color: router.asPath === item.href ? "#E70000" : "white",
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
        </Box>
      </CSSTransition>
    </>
  );
}

export default Nav2;
