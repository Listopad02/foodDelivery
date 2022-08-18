import React, { useEffect } from 'react'
import {
  Container,
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import styles from "../styles/CartComponent.module.css";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, deleteOrder } from '../redux/orderSlice';
import { incrementOrder, decrementOrder } from "../redux/mapSlice"

interface props {
  dish: any,
  count: any
}

const CartItem = ({ dish, count }: props) => {
  const dispatch = useDispatch()
  const counter = useSelector((state: RootState) => state.order[dish.id])
  
  return (
    <Box className={styles.box}>
      <img src={"https://api.shashlandia.ru" + dish.image} alt="meat" className={styles.image} />
      <div>
        <h4 className={styles.title}>{dish.name}</h4>
        <span className={styles.weight}>{dish.weight}&nbsp;{dish.category.name === 'Услуги' || dish.category.name === '.Все для шашлыка' ? 'шт' : 'кг'}</span>
      </div>
      <Box className={styles.box__counter}>
        <button className={styles.btn__inc}
          onClick={() => {
            if (counter > 1) {
              dispatch(decrement(dish.id))
              dispatch(decrementOrder(dish.id))
            } else {
            }
          }}
        >
          -
        </button>
        { counter }
        <button className={styles.btn__inc} onClick={() => {
          dispatch(increment(dish.id))
          dispatch(incrementOrder(dish.id))
        }}>
          +
        </button>
      </Box>
      <h4 className={styles.btn__price}>{ dish.price * count } ₽</h4>
      <IconButton style={{
        width: '7px',
        height: '7px',
        color: '#fff',
        marginRight: "18px"
      }}
        onClick={() => {
          dispatch(deleteOrder(dish.id))

      }}>
        <CloseIcon sx={{
             width: '15px',
             height: '15px',
             color: '#2A2A2A'
        }}/>
      </IconButton>
    </Box>
  )
}

export default CartItem