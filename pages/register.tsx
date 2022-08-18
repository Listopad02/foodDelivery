import React, {useEffect, useState} from 'react'
import {Container, Box, Typography, Input, Button} from "@mui/material";
import Head from "next/head";
import Nav2 from "../components/Nav2";
import Footer from "../components/Footer";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Link from "next/link";

const Register = () => {
    // cтейты
    const [values, setValues] = useState({
        name: '',
        lastName: '',
        password: '',
        email: '',
        passwordRepeat: ''
    })
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    // регулярки
    const regExpValidName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
    const regExpValidMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const regExpValidPassword = /^[a-zA-Z0-9]+$/;

    const changeValues = (e: any) => {
        const target = e.target
        const value = target.value
        const name = target.name
        setValues({ ...values, [name]: value})
    }

    const addNewUser = () => {
        console.log({
            name: values.name,
            email: values.email,
            password: values.password,
            lastName: values.lastName
        })
    }
    const clearInput = () => {
        setValues({ name: '', lastName: '', password: '', email: '', passwordRepeat: '' })
    }

    return (
        <>
            <Head>
                <title>Шашландия - регистрация</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Nav2 />
            <Container style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '150px',
                flexDirection: 'column',
            }}>
                <Box style={{
                    width: '400px',
                    // minWidth: '300px',
                    background: 'white',
                    borderRadius: '20px',
                    padding: '20px',
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography sx={{ margin: '10px auto 30px auto', textAlign: 'center', fontSize: '1.3rem' }}>Регистрация</Typography>
                    <Typography sx={{ fontSize: '1.2rem', width: '100%' }}>Имя</Typography>
                    <input
                        type='text'
                        name='name'
                        value={values.name}
                        placeholder='Введите имя'
                        style={{
                            borderRadius: '5px',
                            width: '100%',
                            height: '40px',
                            border: '1px solid grey',
                            marginTop: '10px'
                        }}
                        onChange={(e) => {
                            changeValues(e)
                        }}
                        onFocus={(e) => {
                            setError(false)
                            setErrorMessage('')
                        }}
                        onBlur={() => {
                            if(values.name !== '' && !regExpValidName.test(values.name)) {
                                setError(true)
                                setErrorMessage('Проверьте правильность написания имени')
                            } else {
                                setError(false)
                                setErrorMessage('')
                            }
                        }}
                    />
                    <Typography sx={{ fontSize: '1.2rem', marginTop: '30px', width: '100%' }}>Фамилия</Typography>
                    <input
                        type='text'
                        name='lastName'
                        value={values.lastName}
                        placeholder='Введите фамилию'
                        style={{
                            borderRadius: '5px',
                            width: '100%',
                            height: '40px',
                            border: '1px solid grey',
                            marginTop: '10px'
                        }}
                        onChange={(e) => {
                            changeValues(e)
                        }}
                        onFocus={(e) => {
                            setError(false)
                            setErrorMessage('')
                        }}
                        onBlur={() => {
                            if(values.lastName !== '' && !regExpValidName.test(values.lastName)) {
                                setError(true)
                                setErrorMessage('Проверьте правильность написания Фамилии')
                            } else {
                                setError(false)
                                setErrorMessage('')
                            }
                        }}
                    />
                    <Typography sx={{ fontSize: '1.2rem', marginTop: '30px', width: '100%' }}>Email</Typography>
                    <input
                        type='email'
                        name='email'
                        value={values.email}
                        placeholder='Введите email'
                        style={{
                            borderRadius: '5px',
                            width: '100%',
                            height: '40px',
                            border: '1px solid grey',
                            marginTop: '10px'
                        }}
                        onChange={(e) => {
                            changeValues(e)
                        }}
                        onFocus={(e) => {
                            setError(false)
                            setErrorMessage('')
                        }}
                        onBlur={() => {
                            if(values.email !== '' && !regExpValidMail.test(values.email)) {
                                setError(true)
                                setErrorMessage('Проверьте правильность написания Email')
                            } else {
                                setError(false)
                                setErrorMessage('')
                            }
                        }}

                    />
                    <Typography sx={{ fontSize: '1.2rem', marginTop: '30px', width: '100%' }}>Пароль</Typography>
                    <input
                        type='password'
                        name='password'
                        value={values.password}
                        placeholder='Введите пароль'
                        style={{
                            borderRadius: '5px',
                            width: '100%',
                            height: '40px',
                            border: '1px solid grey',
                            marginTop: '10px'
                        }}
                        onChange={(e) => {
                            changeValues(e)
                        }}
                        onFocus={(e) => {
                            setError(false)
                            setErrorMessage('')
                        }}
                        onBlur={() => {
                            if(values.password !== '' && !regExpValidPassword.test(values.password)) {
                                setError(true)
                                setErrorMessage('Только латинские буквы и цифры')
                            } else if(values.password !== values.passwordRepeat) {
                                setError(true)
                                setErrorMessage("Пароли не совпадают ")
                            } else if (values.password.length < 5) {
                                setError(true)
                                setErrorMessage('Пароль должен быть длиннее 5 символов')
                            } else {
                                setError(false)
                                setErrorMessage('')
                            }
                        }}
                    />
                    <Typography sx={{ fontSize: '1.2rem', marginTop: '30px', width: '100%' }}>Повторите пароль</Typography>
                    <input
                        type='password'
                        name='passwordRepeat'
                        value={values.passwordRepeat}
                        placeholder='Введите пароль'
                        style={{
                            borderRadius: '5px',
                            width: '100%',
                            height: '40px',
                            border: '1px solid grey',
                            marginTop: '10px'
                        }}
                        onChange={(e) => {
                            changeValues(e)
                        }}
                        onFocus={(e) => {
                            setError(false)
                            setErrorMessage('')
                        }}
                        onBlur={() => {
                            if(values.password !== '' && !regExpValidPassword.test(values.password)) {
                                setError(true)
                                setErrorMessage('Только латинские буквы и цифры')
                            } else if(values.password !== values.passwordRepeat) {
                                setError(true)
                                setErrorMessage("Пароли не совпадают ")
                            } else if (values.password.length < 5) {
                                setError(true)
                                setErrorMessage('Пароль должен быть длиннее 5 символов')
                            } else {
                                setError(false)
                                setErrorMessage('')
                            }
                        }}
                    />
                    <button
                        style={{
                            border: 'none',
                            background: '#1976d2',
                            color: 'white',
                            borderRadius: '5px',
                            textAlign: 'center',
                            width: '100%',
                            padding: '10px 0',
                            fontSize: 18,
                            marginTop: '30px',
                            cursor: 'pointer'
                        }}
                        onClick={()=> {
                            if (
                                values.email.length < 3 ||
                                values.name.length < 3 ||
                                values.lastName.length < 3 ||
                                values.password.length < 5 ||
                                values.passwordRepeat.length < 5
                            ) {
                                setError(true)
                                setErrorMessage('Заполните форму')
                            }
                            else {
                               addNewUser()
                            }
                        }}
                        disabled={error}
                    >Зарегистрироваться</button>
                </Box>
                <Box sx={{ display: 'flex',  }}>
                    <p style={{  margin: '16px 0 16px', fontSize: '20px' }}>Уже зарегистрированы?</p>
                    <Link href='/login'>
                        <a style={{  margin: '16px 0 16px 10px', fontSize: '20px', color: 'red' }}>Вход</a>
                    </Link>
                </Box>
            </Container>
            {error && <Box style={{
                position: 'fixed',
                bottom: '20px',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '70px',
                background: 'red',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderRadius: '20px'
            }}
            >
                <PriorityHighIcon />
                {errorMessage}
            </Box>}
            <Footer />
        </>
    )
}

export default Register