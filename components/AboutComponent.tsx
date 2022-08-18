import React, { useRef } from 'react'
import {Container, Box, Typography, Grid} from "@mui/material";
import styles from '../styles/about.module.css'
import shachlandia from '../public/images/shaslandia.svg'
import one from '../public/images/one.svg'
import two from '../public/images/two.svg'
import three from '../public/images/three.svg'
import four from '../public/images/four.svg'
import five from '../public/images/five.svg'
import six from '../public/images/six.svg'
import seven from '../public/images/seven.svg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from "next/router";
import { YMaps, Map, Polygon, SearchControl } from 'react-yandex-maps';
import Maps from './Maps';

export const AboutComponent = () => {
    const router = useRouter();

    const pushMenu = () => {
        router.push('/')
    }

    return (
        <>
            <Box className={styles.back}>
                <Container maxWidth="lg">
                    <Box
                        className={styles.container}
                    >
                        <p className={styles.text_p}>Информация о нас</p>
                    </Box>
                </Container>
            </Box>
                <Container sx={{ marginTop: '78px', display: 'grid', alignItems: 'center' }}>
                <Box className={styles.about}>
                    <Box className={styles.box__description}>
                        <img src={shachlandia.src} alt="sashlandia" className={styles.about__title} />
                        <p className={styles.about__description}>Это лидер среди сервисов организации Ваших пикников!</p>
                        <Box className={styles.about__paragraphs__container}>
                            <p className={styles.about__paragraph}>Наш сервис доставки «Шашландия» привезет Вам все самое необходимое для шашлыка и пикника; мясо, овощи, мангал, уголь, воду.</p>
                            <p className={styles.about__paragraph}>Где бы Вы ни находились, дома или уже на природе, мы доставим Вам мясо высшего сорта и все самое необходимое для приготовления шашлыка максимально быстро</p>
                            <p className={styles.about__paragraph}>Используем только фермерское мясо.</p>
                            <p className={styles.about__paragraph}>Маринуем по фирменному рецепту.</p>
                        </Box>
                    </Box>
                    <Box className={styles.grill}></Box>
                </Box>
                <Box maxWidth="lg" className={styles.benefitsCont}>
                    <Grid container spacing={3} sx={{ textAlign: "center" }}>
                        <Grid item xs={12} md={4}>
                            <Box className={styles.benefitsCard}>
                                <Box>
                                    <div className={styles.benefitsImageContainer}>
                                        <img src={one.src} />
                                    </div>
                                </Box>
                                <Box
                                    className={styles.benefitsBox}
                                    sx={{ fontSize: { xs: "20px", md: "24px" }, width: '100%' }}
                                >
                                    Зона доставки Москва
                                    <br />и Московская область
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className={`${styles.benefitsCard} ${styles.width}`}>
                                <Box>
                                    <div className={styles.benefitsImageContainer}>
                                        <img src={two.src} />
                                    </div>
                                </Box>
                                <Box
                                    className={styles.benefitsBox}
                                    sx={{ fontSize: { xs: "20px", md: "24px" }, width: '166px' }}
                                >
                                    Фермерское
                                    <br />производство
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className={`${styles.benefitsCard} ${styles.width}`}>
                                <Box>
                                    <div className={styles.benefitsImageContainer}>
                                        <img src={four.src} />
                                    </div>
                                </Box>
                                <Box
                                    className={styles.benefitsBox}
                                    sx={{ fontSize: { xs: "20px", md: "24px" }, width: '100%' }}
                                >
                                    Доставим заказ 24/7
                                    <br />в установленное время
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className={styles.benefitsCard}>
                                <Box>
                                    <div className={styles.benefitsImageContainer}>
                                        <img src={three.src} />
                                    </div>
                                </Box>
                                <Box
                                    className={styles.benefitsBox}
                                    sx={{ fontSize: { xs: "20px", md: "24px" }, width: '166px' }}
                                >
                                    Контроль
                                    <br />качества
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className={styles.benefitsCard}>
                                <Box>
                                    <div className={styles.benefitsImageContainer}>
                                        <img src={five.src} />
                                    </div>
                                </Box>
                                <Box
                                    className={styles.benefitsBox}
                                    sx={{ fontSize: { xs: "20px", md: "24px" },  width: '166px' }}
                                >
                                    8 лет
                                    <br />на рынке
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className={styles.benefitsCard}>
                                <Box>
                                    <div className={styles.benefitsImageContainer}>
                                        <img src={six.src} />
                                    </div>
                                </Box>
                                <Box
                                    className={styles.benefitsBox}
                                    sx={{ fontSize: { xs: "20px", md: "24px" },  width: '166px' }}
                                >
                                    Без ГМО
                                    <br />и добавок
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    </Box>
                    <Box className={styles.map__box}>
                        <img src={seven.src} alt='icon' className={styles.map__icon} />
                        <p className={styles.map__title}>
                            Зоны доставки
                        </p>
                        <p className={styles.map__text}>
                            Пунктуальность – наш конёк. <br /> Поэтому мы всегда привозим <br /> Ваш заказ вовремя!
                        </p>
                        <p className={styles.map__text}>
                            Наша курьерская служба работает как <br /> часы, составляя продуманные маршруты. <br /> Курьеры всегда приезжают вовремя, <br /> независимо от дорожной обстановки.
                        </p>
                        <button className={styles.button} onClick={() => pushMenu()}>
                            На главную <ArrowForwardIosIcon style={{ margin: 'auto 0 auto 15px', width: '15px', height: '15px' }} />
                        </button>
                    </Box>
            </Container>
        </>
    )
}