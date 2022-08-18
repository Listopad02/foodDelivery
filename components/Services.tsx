import { Container, Box, Grid } from "@mui/material";
import styles from "../styles/Services.module.css";
import Image from "next/image";
import services from "../public/images/services_2.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import load from "../public/images/loader_img.png";
import { increment } from "../redux/orderSlice";
import { incrementOrder } from "../redux/mapSlice"
import { useAppDispatch } from "../redux/hooks";

function Services() {
  const dispatch = useAppDispatch()
  return (
    <Container maxWidth="lg">
      <Box className="header_text services">Дополнительные услуги</Box>
      <Box className={styles.container}>
        <Grid container>
          <Grid item xs={12} md={5}>
            <Box className={styles.text}>
              <Box className={styles.header}>Персональный мангальщик</Box>
              <Box className={styles.textSmall}>
                Профессиональный мангальщик, позаботится о Вашем времени и
                возьмёт всю работу по приготовлению шашлыка на себя. А Вы в это
                время сможете отдыхать и наслаждаться компанией родных и друзей.
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: 'flex', justifyContent: "center" }}
          >
            <Box className={styles.image}>
              <img alt="meat" src={services.src} width="240" height="295" />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box className={styles.cart}>
              <Box sx={{ fontSize: "20px", marginBottom: "10px" }}>
                Мангальщик
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CurrencyRubleIcon sx={{ marginRight: "5px" }} />
                1750
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <AccessTimeIcon sx={{ marginRight: "5px" }} />1 час
              </Box>
              <Box>
                <button className={styles.button} onClick={() => {
                  dispatch(increment(92));
                  dispatch(incrementOrder(92));
                }}>Нанять</button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Services;
