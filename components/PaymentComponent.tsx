import React from 'react'
import styles from "../styles/PaymentComponent.module.css"
import { Box } from "@mui/material";
import Maps from './Maps';
import visa from "../public/images/vise.svg"
import mir from '../public/images/mir.svg'
import mastercard from '../public/images/mastercard.svg'
import paykeeper from '../public/images/paykeeper.png'

const PaymentComponent = () => {
  return (
    <>
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
    }}>
        <p className={styles.title} style={{ margin: '0 20px 0 20px' }}>Оплата и доставка</p>
    </Box>
    <div className={styles.description}>
        <div>
            <p className={styles.text__title}>
                Доставка
            </p>
            <p className={styles.text__text}>
                Круглосуточно без выходных и праздников <br />
                Время и цена доставки зависит от зоны <br />
            </p>
        </div>
        <div>
            <p className={styles.text__title}>
                Оплата
            </p>
            <div className={styles.text__text}>
                Принимается только онлайн оплата <br/>
                <br />
                К оплате принимаются платежные карты: VISA Inc, MasterCard WorldWide, МИР.
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '40px 0 0 0' }}>
                    <img
                        className={styles.img__logo}
                        src={visa.src}
                        width={51}
                        alt="visa"
                    />
                    <img
                        className={styles.img__logo}
                        src={mir.src}
                        width={56}
                        alt="mir"
                    />
                    <img
                        className={styles.img__logo}
                        src={mastercard.src}
                        width={34}
                        alt="mastercard"
                    />
                    <img
                        className={styles.img__logo}
                        src={paykeeper.src}
                        width={99}
                        alt="paykeeper"
                    />
                </div>
            </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className={styles.text__title}>Отказ от услуги</p>
            <span className={styles.text__text}>Отказ от доставки регламентируется статьей 32 федерального закона «О защите прав потребителей»,<br /> но не менее чем за сутки</span>
        </div>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Maps />
    </div>
    </>
  )
}

export default PaymentComponent