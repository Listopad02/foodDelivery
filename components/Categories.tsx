import styles from "../styles/Categories.module.css";
import { Container, Grid, Box } from "@mui/material";
import Image from "next/image";
import meat from "../public/images/meat3.png";
import veggies from "../public/images/veggies.png";
import barbecue from "../public/images/barbecue.png";
import services from "../public/images/services.png";
import scrollToElem from "../utils/scroll";
import {useAppDispatch} from "../redux/hooks";
import { setVegan, setMeat } from "../redux/clickSlice";

function Categories() {
  const dispatch = useAppDispatch()
  return (
    <Container maxWidth="lg">
      <Box className="header_text categories">Категории</Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Box className={styles.meat} onClick={() => {
            scrollToElem(".menu")
            dispatch(setMeat(true))
          }}>
            <Box className={styles.bigText}>Мясо</Box>
            <Box className={styles.smallText}>
              Для всех вкусовых предпочтений
            </Box>
            <Box className={styles.imageMeat}>
              <img src={meat.src} className={styles.imgWidth} alt="meat" width="300" height="174" />
            </Box>
          </Box>
          <Box className={styles.veggies} onClick={() => {
            scrollToElem(".menu")
            dispatch(setVegan(true))
          }}>
            <Box className={styles.bigText}>Овощи</Box>
            <Box className={styles.smallText}>Всегда самые свежие</Box>
            <Box className={styles.imageVeggies}>
              <img src={veggies.src}  className={styles.imgWidth} alt="veggies" width="300" height="192" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3.5}>
          <Box
            className={styles.barbecue}
            onClick={() => scrollToElem(".barbecue")}
          >
            <Box className={styles.bigText}>Все для шашлыка</Box>
            <Box className={styles.smallText}>
              Мангалы, уголь, вода, разжигательная смесь
            </Box>
            <Box
              className={styles.imageBarbecue}
              sx={{ display: { xs: "none", md: "flex", lg: "none" }, position: 'relative', zIndex: '0' }}
            >
              <img src={barbecue.src} alt="barbecue" width="250" height="250" className={styles.imgWidth} />
            </Box>
            <Box
              className={styles.imageBarbecue}
              sx={{ display: { xs: "block", md: "none", lg: "flex" }, position: 'relative', zIndex: '0' }}
            >
              <img className={styles.barbecueImg} src={barbecue.src} alt="barbecue" width="300" height="300" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3.5}>
          <Box
            className={styles.services}
            onClick={() => scrollToElem(".services")}
          >
            <Box className={styles.bigText}>Услуги</Box>
            <Box className={styles.smallText}>Профессиональный мангальщик</Box>
            <Box
              className={styles.imageServices}
              sx={{ display: { xs: "flex", md: "flex" }, justifyContent: { xs: "right" } }}
            >
              <img className={`${styles.cookImg} ${styles.widthImg}`} src={services.src}  alt="services" width="340" height="378" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Categories;
