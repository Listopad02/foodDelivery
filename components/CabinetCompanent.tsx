import React, { useState, useEffect } from 'react'
import {Container, Box, Modal, Input, Button} from "@mui/material";
import styles from '../styles/cabinet.module.css'
import noImg from '../public/images/Group.png'
import SettingsIcon from '@mui/icons-material/Settings';
import api from '../utils/api';

const CabinetCompanent = () => {
    const userInfo = async () => {
        try {
            const answer = await api("/profile", {
                method: "GET"
            })
            setValues({...values, name: answer.data.first_name,
                                  lastName: answer.data.last_name,
                                  phone: answer.data.phone,
                                  password: answer.data.password})
        } catch(err) {
            console.log(err)
        }
    }

    const saveUserInfo = async () => {
        try {
            await api("/profile", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    first_name: values.name,
                    last_name: values.lastName,
                    phone: values.phone,
                    password: values.password
                }),
            })
        } catch (err) {
            console.log(err)
        }
    }

    const [values, setValues] = useState({
        name: '',
        lastName: '',
        phone: '',
        password: '',
    })
    console.log('vals', values)

    useEffect(() => {
        userInfo()
    }, [])

    const [avatar, setAvatar] = useState(null)
    const [scores, setScores] = useState(0)
    const [orders, setOrders] = useState(0)
    const [modal, setModal] = useState(false)

    const handleValues = (e: any) => {
        const value = e.target.value
        const name = e.target.name
        setValues({ ...values, [name]: value })
    }

    const handleModal = () => {
        setModal(!modal)
    }

    const changeAvatar = (e: any) => {
        try {
            const file = e.target.files[0]
            const newAva = URL.createObjectURL(file)
            const link = newAva.split('blob:')[1]
            // @ts-ignore
            setAvatar(link)
        } catch (err) {
            console.log('ERROR', err)
        }
        
    }

    return (
        <Container className={styles.container}>
            <Box sx={{ position: 'relative' }} className={styles.box}>
                <Box sx={{ position: 'absolute', top: '10px', right: '20px', cursor: 'pointer' }}
                onClick={() => handleModal()}
                >
                    <SettingsIcon />
                </Box>
                {modal &&
                    <Modal open={modal} onClose={handleModal}>
                        <Box sx={{
                            width: 400,
                            margin: '150px auto',
                            background: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            padding: '15px'
                        }}>
                            <p>Имя</p>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Input
                                    type='text'
                                    value={values.name}
                                    name='name'
                                    onChange={(e) => {
                                        handleValues(e)
                                    }}
                                />
                                <Button onClick={() => saveUserInfo()}>Сохранить</Button>
                            </Box>
                            <p>Фамилия</p>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Input
                                    type='text'
                                    value={values.lastName}
                                    name='lastName'
                                    onChange={(e) => {
                                        handleValues(e)
                                    }}
                                />
                                <Button onClick={() => saveUserInfo()}>Сохранить</Button>
                            </Box>
                            <p>Телефон</p>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Input
                                    type='phone'
                                    value={values.phone}
                                    name='phone'
                                    onChange={(e) => {
                                        handleValues(e)
                                    }}
                                />
                                <Button onClick={() => saveUserInfo()}>Сохранить</Button>
                            </Box>
                            <p>Пароль</p>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Input
                                    type='password'
                                    value={values.password}
                                    name='password'
                                    onChange={(e) => {
                                        handleValues(e)
                                    }}
                                />
                                <Button onClick={() => saveUserInfo()}>Сохранить</Button>
                            </Box>
                        </Box>
                    </Modal>
                }
                <p className={styles.profile}>Профиль</p>
                <Box className={styles.image}>
                    <label>
                        <input
                            type='file'
                            accept='image/*'
                            placeholder='Загрузить аватар'
                            onChange={(e) => {
                                changeAvatar(e)
                            }}
                            className={styles.avatarChange}
                        />
                        <img
                            className={styles.img}
                            src={`${avatar !== null ? 'blob:' + avatar : noImg.src}`}
                        />
                    </label>
                </Box>
                <Box className={styles.name_container}>
                    <p className={styles.name}>{values.name}</p>
                    <p className={styles.lastname}>{values.lastName}</p>
                </Box>
                <Box className={styles.flex}>
                    <p className={styles.orders__counter}>{orders} заказов</p>
                    <Box className={styles.border} />
                    <p className={styles.orders__counter}>{scores} баллов</p>
                </Box>
            </Box>
            <Box>
                <h3 style={{ margin: '40px auto', textAlign: 'center', fontSize: '25px' }}>История заказов</h3>
                <Box className={styles.orders}>
                    <Box className={styles.date__container}>
                        <p className={styles.text}>15.06.2022</p>
                        <p className={styles.text}>22:49</p>
                        <p className={`${styles.status} ${styles.wait}`}>Ожидайте</p>
                    </Box>
                    <Box className={styles.date__container}>
                        <p className={styles.text}>4 товара</p>
                        <p className={styles.text}>1.479₽</p>
                        <button className={styles.btn}>Смотреть заказ</button>
                    </Box>
                </Box>
                <Box className={styles.orders}>
                    <Box className={styles.date__container}>
                        <p className={styles.text}>12.06.2022</p>
                        <p className={styles.text}>12:40</p>
                        <p className={`${styles.status} ${styles.delivered}`}>Доставлен</p>
                    </Box>
                    <Box className={styles.date__container}>
                        <p className={styles.text}>3 товара</p>
                        <p className={styles.text}>2.289₽</p>
                        <button className={styles.btn}>Смотреть заказ</button>
                    </Box>
                </Box>
                <Box className={styles.orders}>
                    <Box className={styles.date__container}>
                        <p className={styles.text}>11.03.2022</p>
                        <p className={styles.text}>08:20</p>
                        <p className={`${styles.status} ${styles.canceled}`}>Отказ</p>
                    </Box>
                    <Box className={styles.date__container}>
                        <p className={styles.text}>2 товара</p>
                        <p className={styles.text}>1.799₽</p>
                        <button className={styles.btn}>Смотреть заказ</button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default CabinetCompanent