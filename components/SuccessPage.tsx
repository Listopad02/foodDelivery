import React from 'react'
import {
  Container,
  Box,
  Typography,
} from "@mui/material";
import styles from "../styles/SuccessPage.module.css"
import Link from "next/link";

const SuccessPage = () => {
  return (
    <Container maxWidth="lg">
      <Box className={styles.success}>
        <Box>
          <Box className={styles.primary}>
            <Typography>Оплата произведена успешно!</Typography>
          </Box>
          <Box className={styles.link}>
          <Link href="/">
            <Typography>На главную</Typography>
          </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default SuccessPage