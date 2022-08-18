import styles from "../styles/Footer.module.css";
import { Box, Container, Grid, Link } from "@mui/material";
import { useRouter } from "next/router";

const itemsMenu = [
  { name: "Главная", href: "/" },
  { name: "О нас", href: "/about" },
  // { name: "Меню", href: "/menu" },
  { name: "Оплата и доставка", href: "/payment" },
  { name: "Контакты", href: "/contacts" },
  { name: "Политика конфиденциальности", href: "/policy" }
];

function Footer() {
  const router = useRouter();
  const handleClick = (e: any): void => {
    e.preventDefault();
    router.push(e.target.href);
  };
  return (
    <Box className={styles.container}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box className={styles.column}>
              <Box className={styles.header}>Контакты</Box>

              <Box>24 часа</Box>
              <Box>8(495)139-64-44</Box>
              <Box>dostavka@tyteda.ru</Box>
              <Box sx={{ textAlign: 'center' }}>г. Москва, Сталеваров ул., д.14, корпус 1</Box>
              {/* <Box>
                <Link href="/policy" style={{ color: "#2A2A2A", textDecoration: "none" }}>
                  Политика конфиденциальности
                </Link>
              </Box> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className={styles.column}>
              <Box className={styles.header}>TYTEDA | Шашландия</Box>
              {itemsMenu.map((item, i) => {
                return (
                  <Box key={i}>
                    <a href={item.href} onClick={handleClick}>
                      {item.name}
                    </a>
                  </Box>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className={styles.column}>
              <Box className={styles.header}>Дополнительные услуги</Box>
              <Box>
                <a href="https://tyteda.ru/" target="_blank" rel="noreferrer">
                  Доставка готовой еды
                </a>
              </Box>
              <Box>
                <a
                  href="https://corp-pitanie.tyteda.ru/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Корпаративное питания
                </a>
              </Box>
              <Box>
                <a
                  href="http://vezu-banket.ru/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Везу банкет
                </a>
              </Box>
              <Box>
                <a
                  href="http://pominki-dostavka.ru/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Доставка поминальных обедов
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box className={styles.bottom}>
          ООО &quot;БКФ&quot; ОГРН: 5177746201221 ИНН: 7720402524, Не является
          публичной офертой, {" Copyright © "}
          <Link
            color="inherit"
            target="_blank"
            href="https://tyteda.ru/"
            rel="noreferrer"
          >
            tyteda.ru
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
          <br />
          <a href="https://wetop.ru/" target="_blank" rel="noreferrer">
            Сделано WETOP digital agency
          </a>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
