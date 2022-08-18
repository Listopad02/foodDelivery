import { useEffect, useState } from "react";
import styles from "../styles/Product.module.css";
import api from "../utils/api";
import Loader from "./Loader";
import { Container, Box, Skeleton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/orderSlice";
import load from "../public/images/loader_img.png";
import { CSSTransition } from "react-transition-group";
import { incrementOrder, decrementOrder } from "../redux/mapSlice"

function Product({ item }: any) {
  const order = useSelector((state: RootState) => state.order);
  const dishes = useSelector((state: RootState) => state.dishes);
  const dispatch = useDispatch();
  const [slider, setSlider] = useState(3);
  useEffect(() => {
    sizeWindow();
    window.addEventListener("resize", function (event) {
      sizeWindow();
    });
  }, []);

  if (Object.values(dishes).length < 1) return <Loader />;

  function sizeWindow() {
    const screenWidth = window.screen.width;
    if (screenWidth > 960) {
      setSlider(3);
      return;
    }
    if (screenWidth > 540) {
      setSlider(2);
      return;
    }
    if (screenWidth < 540) {
      setSlider(1);
      return;
    }
  }

  return (
    <Container maxWidth="lg">
      <Box className={styles.container}>
        <Swiper
          modules={[Navigation]}
          style={{ padding: "0 20px" }}
          spaceBetween={50}
          slidesPerView={slider}
          navigation
          // onSlideChange={() => "slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {Object.values(dishes).map((dish: any, i: number) => {
            return (
              <Box key={dish.id}>
                {dish.category.id === item && (
                  <SwiperSlide>
                    <Box className={styles.card}>
                      {dish.image ? (
                        <img
                          className={styles.img}
                          src={"https://api.shashlandia.ru" + dish.image}
                          alt={dish.name}
                          height="200"
                          width="200"
                        />
                      ) : (
                        <Skeleton
                          key={dish.id}
                          variant="rectangular"
                          width={200}
                          height={200}
                        />
                      )}

                      <Box className={styles.name}>{dish.name}</Box>
                      <Box className={styles.cart}>
                        <Box className={styles.info}>
                          <Box className={styles.weight}>{dish.weight}
                            { dish.category.name !== '.Все для шашлыка' ? " кг" : ' шт' }
                          </Box>
                          <Box className={styles.price}>
                            {dish.price} &#8381;
                          </Box>
                        </Box>
                        <Box>
                          <CSSTransition
                            in={order[dish.id] > 0}
                            timeout={200}
                            classNames="decrement"
                            unmountOnExit
                            mountOnEnter
                          >
                            <button type="button"
                              className={styles.buttonDe}
                              onClick={() => {
                                dispatch(decrement(dish.id));
                                dispatch(decrementOrder(dish.id))
                              }}
                            >
                              -
                            </button>
                          </CSSTransition>

                          <button type="button"
                            className={styles.buttonIn}
                            onClick={() => {
                              dispatch(increment(dish.id));
                              dispatch(incrementOrder(dish.id))
                            }}
                          >
                            {order[dish.id] ? order[dish.id] : "+"}
                          </button>
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                )}
              </Box>
            );
          })}
        </Swiper>
      </Box>
    </Container>
  );
}

export default Product;
