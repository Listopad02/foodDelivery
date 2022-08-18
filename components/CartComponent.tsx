import styles from "../styles/CartComponent.module.css";
import {
  Container,
  Box,
  Grid,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers";
import IconButton from "@mui/material/IconButton";
import frLocale from "date-fns/locale/fr";
import ruLocale from "date-fns/locale/ru";
import arSaLocale from "date-fns/locale/ar-SA";
import enLocale from "date-fns/locale/en-US";
import { useState } from "react";
import meat from "../public/images/meat.png";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CartAdressAutoComlete from "./CartAdressAutoComlete.js";
import api from "../utils/api";
import { SliderValueLabelUnstyled } from "@mui/base";
import { Co2Sharp } from "@mui/icons-material";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Product from "./Product"
import { useEffect } from "react";

const localeMap: any = {
  en: enLocale,
  fr: frLocale,
  ru: ruLocale,
  ar: arSaLocale,
};

const delivery_zone: any = {
  1: 250,
  2: 500,
  3: 750,
  4: 1000,
};

const CartComponent = () => {
  const regExpValidName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
  const regExpValidPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
  const regExpValidMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const [error, setError] = useState(false)
  const categories = useSelector((state: RootState) => state.categories);
  const [errorMessage, setErrorMessage] = useState('')
  const totalOrder = useSelector((state: RootState) => state.mapSlice.totalOrder)
  const orderNumber = Math.floor(Math.random() * 10000)
  const [zone, setZone] = useState(0);
  const [locale, setLocale] = useState("ru");
  const [value, setValue] = useState(new Date((Date.now() + 12 * (60 * 60 * 1000))));
  const [input, setInput] = useState(false)
  const [comment, setComment] = useState('')
  const today = new Date((Date.now() + 12 * (60 * 60 * 1000)));
  const order = useSelector((state: RootState) => state.order);
  const inputAddr = useSelector((state: RootState) => state.mapSlice.inputAddr);
  const dishes = useSelector((state: RootState) => state.dishes);
  const [deliver, setDeliver] = useState(true);
  const date = [value].toString()

  const [address, setAddress] = useState({
    street: '',
    entrance: '',
    storey: '',
    apartment: '',
  });
  const adr = ['Адрес', inputAddr, 'Подьезд', address.entrance, 'этаж', address.storey, 'квартира', address.apartment, 'НОМЕР ЗАКАЗА', orderNumber].toString()

  const [values, setValues] = useState({
    name: '' || null,
    phone: '' || null,
    email: '' || null,
    comment: '' || null,
    deliveryMethod: 'pickup' || 'delivery',
  })

  useEffect(() => {
    if(address.street !== inputAddr) {
        setZone(0)
    }
  }, [inputAddr, address.street])

  const handleChange: any = (e: any) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({...values, [name]: value})
  }

  const handleAddress = (e: any) => {
    setAddress({...address, street: e.target.value})
  }

  const handleChangeAddress = (e: any) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setAddress({...address, [name]: value});
  }

  const handleInput = (e: any) => {
    e.preventDefault()
    setInput(!input)
  }

  const postOrder = async () => {
    if (error === true) {
      setErrorMessage('Заполните форму')
    } else if (values.name === null || values.phone === null || values.email === null) {
        setError(true)
        setErrorMessage('Заполните форму')
    } else if (values.deliveryMethod === 'delivery' && zone === 0) {
        setError(true)
        setErrorMessage("Мы не работаем в этой зоне!")
    } else {
        await api('/orders', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                dishes: totalOrder,
                date: date,
                comment: values.comment !== '' || null ? values.comment : '',
                deliveryMethod: values.deliveryMethod,
                deliveryAddress: address.street !== '' && address.street !== null ? adr : 'Самовывоз',
                customer: {
                    first_name: values.name,
                    last_name: values.deliveryMethod !== 'pickup' ? adr : 'Caмовывоз',
                    email: values.email,
                    phone: values.phone,
                }
            })
        })
      }
    }

  const handleOpen = () => {
    const boxMap: HTMLElement | null = document.getElementById("boxMap");
    if (boxMap) {
      boxMap.style.display === "block"
        ? (boxMap.style.cssText = `display: none;`)
        : (boxMap.style.cssText = `display: block;`);
    }
  };

  useEffect(() => {
    if (zone !== 0) {
        setError(false)
        setErrorMessage('')
    } else if (zone === 0 && values.deliveryMethod !== 'pickup') {
        setError(true)
        setErrorMessage('Доставка в данную зону недоступна!')
    } else if (zone === 0 && values.deliveryMethod === 'pickup' && values.name && values.phone && values.email) {
        setError(false)
        setErrorMessage('')
    }
  }, [zone, values.deliveryMethod, values.name, values.phone, values.email])

  let count: number = 0;
  if (Object.values(order).length > 0) {
    count = Object.values(order).reduce((a: number, b: number): number => {
      return a + b;
    });
  }

  let summ: number = 0;
  if (Object.values(order).length > 0) {
    summ = Object.keys(order)
      .map((e: any) => {
        return +dishes[e].price * +order[e];
      })
      .reduce((a: number, b: number): number => {
        return a + b;
      });
  }

  if (summ === 0)
    return (
      <Container maxWidth="lg">
        <Box className={styles.CartIsEmpty}>
          <Box>
            <ProductionQuantityLimitsIcon color="primary" fontSize="large" />
          </Box>
          <Box>Корзина пуста</Box>
        </Box>
      </Container>
    );

  return (
    <Container maxWidth="lg">
      <Box className="header_text">Корзина</Box>
      <Box>
        <Box>
          {Object.keys(order).map((el: any) => {
            return (
              order[el] > 0 && (
                <CartItem key={el.id} dish={dishes[el]} count={order[el]} />
              )
            );
          })}
        </Box>
        <Box>
          <form className={styles.form} method='POST' action='https://shashlandiya.server.paykeeper.ru/create/'>
            <div style={{ display: 'none' }}>
              <input type='text' name='sum' value={zone !== 0 ? summ + delivery_zone[zone] : summ} /> <br />
              <input type='text' name='orderid' value={orderNumber} /> <br />
              <input type='text' name='service_name' value='Оплата заказа' /> <br />
            </div>
            <Box className="header_text" style={{ paddingTop: '0' }}>Рекомендуем:</Box>
            <Grid container className={styles.menu}>
              {Object.values(categories).map((item: any) => {
                if (item.name[0] === ".") {
                  return <Product key={item.id} item={item.id} />;
                }
              })}
            </Grid>
            <p className={styles.form__title}>
              Персональные данные
            </p>
            <input
              className={styles.form__input}
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="Имя"
              onFocus={() => {
                setError(false)
                setErrorMessage('')
              }}
              onBlur={() => {
                if(values.name !== null && !regExpValidName.test(values.name)) {
                    setError(true)
                    setErrorMessage('Проверьте правильность написания имени')
                }
              }}
            />
            {error &&
                    <Box sx={{
                        position: 'fixed',
                        zIndex: '999',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '300px',
                        height: '100px',
                        background: '#c2383d',
                        display: 'flex',
                        justifyContent: 'space-around',
                        padding: '0 20px',
                        alignItems: 'center',
                        borderRadius: '30px'
                    }}>
                        <PriorityHighIcon sx={{ color: 'white', width: '30px', height: '30px' }} />
                        <Typography sx={{ color: 'white', textAlign: 'center' }}>{errorMessage}</Typography>
                    </Box>
                }
            <Box className={styles.box__input}>
              <input
                className={`${styles.form__input} ${styles.margin_two}`}
                type="text"
                name="phone"
                onChange={(e) => handleChange(e)}
                placeholder="Контактный телефон"
                onFocus={() => {
                  setError(false)
                  setErrorMessage('')
                }}
                onBlur={() => {
                  if(values.phone !== null && !regExpValidPhone.test(values.phone)) {
                      setError(true)
                      setErrorMessage('Проверьте правильность написания номера')
                  }
                }}
              />
              <input
                className={styles.form__input}
                type="email"
                name="email"
                onChange={(e) => handleChange(e)}
                placeholder="E-mail"
                onFocus={() => {
                  setError(false)
                  setErrorMessage('')
                }}
                onBlur={() => {
                  if(values.email !== null && !regExpValidMail.test(values.email)) {
                      setError(true)
                      setErrorMessage('Проверьте правильность написания почты')
                  }
                }}
              />
            </Box>
            <Box className={styles.delivery}>
              <p className={styles.form__title}>
                Способ доставки
              </p>
              <p>
                <input
                  type="radio"
                  name="deliveryMethod"
                  value='delivery'
                  id="1"
                  checked={values.deliveryMethod === 'delivery' ? true : false}
                  onClick={(e) => {
                    handleChange(e)
                    setError(true)
                    setErrorMessage('Укажите Ваш адрес')
                  }}
                />
                Доставить по адресу
              </p>
              <p>
                <input
                  type="radio"
                  name="deliveryMethod"
                  value='pickup'
                  id="2"
                  checked={values.deliveryMethod === 'pickup' ? true : false}
                  onClick={(e) => {
                    handleChange(e)
                    setZone(0)
                    setAddress({ street: '', storey: '', entrance: '', apartment: '' })
                    if (values.name && values.phone && values.email) {
                      setError(false)
                      setErrorMessage('')
                    }
                  }}
                />
                Самовывоз
              </p>
            </Box>
            <CartAdressAutoComlete setAddress={setAddress} setZone={setZone} />
            <Box className={styles.address}>
              <p className={styles.form__title}>Адрес</p>
              <input
                id="suggest"
                className={styles.form__input}
                value={address.street}
                type="text"
                name="street"
                disabled={values.deliveryMethod === 'pickup' ? true : false}
                placeholder="Улица, дом *"
                onFocus={() => {
                  if (zone === 0) {
                      setError(true)
                      setErrorMessage('Доставка для этой зоны недоступна!')  
                  }
                  else if (zone !== 0) {
                      setError(false)
                      setErrorMessage('') 
                  }
                }}
                onChange={e => {
                  handleAddress(e)
                  setError(false)
                  setErrorMessage('') 
                }}
                onBlur={() => {
                  setError(false)
                  setErrorMessage('')
                  if (zone === 0) {
                    setError(true)
                    setErrorMessage('Доставка для этой зоны недоступна!')
                  }
                }}
                // onSubmit={e => {
                //   if (zone !== 0) {
                //     setError(false)
                //     setErrorMessage('') 
                //   }
                // }}
              />
              <Box className={styles.box__input}>
                <input
                  className={`${styles.form__input} ${styles.margin_two}`}
                  type="text"
                  name="entrance"
                  placeholder="Подъезд"
                  value={address.entrance}
                  onChange={(e) => handleChangeAddress(e)}
                  // onFocus={() => {
                  //   setError(false)
                  //   setErrorMessage('')
                  // }}
                  disabled={values.deliveryMethod === 'pickup' ? true : false}
                />
                <input
                  className={`${styles.form__input} ${styles.margin_two}`}
                  type="text"
                  name="storey"
                  placeholder="Этаж"
                  value={address.storey}
                  onChange={(e) => handleChangeAddress(e)}
                  disabled={values.deliveryMethod === 'pickup' ? true : false}
                />
                <input
                  className={styles.form__input}
                  type="text"
                  name="apartment"
                  placeholder="Квартира"
                  value={address.apartment}
                  onChange={(e) => handleChangeAddress(e)}
                  disabled={values.deliveryMethod === 'pickup' ? true : false}
                />
              </Box>
            </Box>
            <Box className={styles.form__data_box}>
              <p className={styles.form__title}>
                Укажите дату и время доставки
              </p>
              <Box className={styles.block}>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  locale={localeMap[locale]}
                >
                  <div>
                    <ToggleButtonGroup
                      value={locale}
                      exclusive
                      sx={{ mb: 2, display: "none", zIndex: "-999" }}
                    >
                      {Object.keys(localeMap).map((localeItem) => (
                        <ToggleButton
                          key={localeItem}
                          value={localeItem}
                        >
                          {localeItem}
                        </ToggleButton>
                      ))}
                    </ToggleButtonGroup>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="Время доставки"
                      value={value}
                      onChange={(newValue: any) => {
                        if (newValue > today) {
                          setValue(newValue);
                        } else {
                          setValue(today);
                        }
                      }}
                    />
                  </div>
                </LocalizationProvider>
              </Box>
            </Box>
            <Box className={styles.btns__container}>
              <button className={styles.comment__btn} type='button' onClick={(e) => {handleInput(e)}}>
                У меня есть комментарий
              </button>
              <button className={styles.delivery__btn} type='submit' onClick={() => {
                    postOrder()
                }}
                      disabled={error ? true : false}>Заказать</button>
            </Box>
            <Box className={styles.btns__container}>
            {input && <input
                    className={styles.form__input}
                    type='text'
                    value={comment}
                    onChange={(e) => {
                        setComment(e.target.value)
                        handleChange(e)
                    }}
                    name='comment'
                    placeholder='Введите ваш комментарий'
                   />
                }
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "auto",
                justifyContent: "space-around",
              }}
            />
          </form>
          {/* <button className={styles.delivery__btn} type='submit' onClick={() => {
                    postOrder()
                }}>Заказать</button> */}
        </Box>
      </Box>
      <Box sx={{ display: { lg: "flex", md: "block" }, marginTop: "20px" }}>
        <Box className={styles.sticky__box}>
          <Box className={styles.sticky__title}>Ваш заказ</Box>
          <Box className={styles.sticky__text}>Товаров:&nbsp;<span>{count > 0 ? count : 0}</span></Box>
          <Box className={styles.sticky__text}>Сумма:&nbsp;<span>{summ} ₽</span></Box>
          {
            zone ? 
            <Box className={styles.sticky__text}>Доставка:&nbsp;<span>{delivery_zone[zone]} ₽</span></Box> :
            null
          }
          <Box className={styles.sticky__btn} onClick={handleOpen}>
            {zone ? "Зона доставки - " + zone : "Адрес доставки не введен"}
          </Box>
          <Box className={styles.sticky__text}>
            Общая сумма:&nbsp;<span>{ zone !== 0 ? summ + delivery_zone[zone] : summ } ₽</span>
          </Box>
          <Box id="boxMap" className={styles.modal}>
            <CloseIcon
              onClick={handleOpen}
              className={styles.modalClose}
              color="primary"
              fontSize="large"
            />
            <div id="map" style={{ width: "300px", height: "300px" }}></div>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CartComponent;