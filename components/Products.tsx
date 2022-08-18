import { Container, Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Product from "./Product";
import styles from "../styles/Products.module.css";
import api from "../utils/api";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { addDishes } from "../redux/dishesSlice";
import { addCategories } from "../redux/categoriesSlice";
import Loader from "./Loader";
import { CSSTransition } from "react-transition-group";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {setMeat, setVegan} from "../redux/clickSlice";

function Products() {
  const categories = useAppSelector((state: RootState) => state.categories);
  const dispatch = useAppDispatch();
  const vegan = useAppSelector(state => state.click.vegan)
  const meat = useAppSelector(state => state.click.meat)

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await api(`/dishes`);
        dispatch(addDishes(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    const fetchCategories = async () => {
      try {
        const response = await api(`/categories`);
        dispatch(addCategories(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
    fetchDishes();
  }, [dispatch]);

  const [anim, setAnim] = useState(false);

  const handleClick = (id: any): void => {
    setPage(id);
    setAnim(!anim);
  };

  useEffect(() => {
    if(vegan === true) {
      dispatch(setMeat(false))
      handleClick(10)
    }
    if(meat === true) {
      dispatch(setVegan(false))
      handleClick(4)
    }
  }, [vegan, meat])

    const [page, setPage] = useState(null);

  if (Object.values(categories).length < 1) return <Loader />;

  if (Object.values(categories).length > 1 && page === null)
    setPage(Object.values(categories)[0].id);

  return (
    <Container maxWidth="lg">
      <Box className="header_text menu">Меню</Box>
      <Grid container className={styles.menu}>
        {Object.values(categories).map((item: any) => {
          if (item.name[0] === ".") return;
          return (
            <Grid
              key={item.id}
              item
              onClick={() => {

                handleClick(item.id);
              }}
            >
              <Box className={styles.item}>
                <Box>
                  {item.image && (
                    <img
                      src={"https://api.shashlandia.ru" + item.image}
                      alt={item.name}
                      width="45"
                      height="45"
                    />
                  )}
                </Box>
                <Box sx={{ color: item.id === page ? "red" : "black" }}>
                  {item.name !== 'Услуги' ? item.name : ''}
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box>
        <CSSTransition in={anim} timeout={500} classNames="example">
          <Product item={page} />
        </CSSTransition>
      </Box>
      <Box className="header_text barbecue">Все для шашлыка</Box>
      <Grid container className={styles.menu}>
        {Object.values(categories).map((item: any) => {
          if (item.name[0] === ".") {
            return <Product key={item.id} item={item.id} />;
          }
        })}
      </Grid>
    </Container>
  );
}

export default Products;
