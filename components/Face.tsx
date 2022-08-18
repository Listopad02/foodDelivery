import styles from "../styles/Face.module.css";
import { Container, Box } from "@mui/material";
import scrollToElem from "../utils/scroll";
import { useEffect } from "react";
import VideoFace from "./VideoFace.js";

function Face() {
  // useEffect(() => {
  //   const back: HTMLElement | null = document.getElementById("back");
  //   const container: HTMLElement | null = document.getElementById("cont");
  //   const text: HTMLElement | null = document.getElementById("text");
  //   const textXS: HTMLElement | null = document.getElementById("textXS");
  //   const button: HTMLElement | null = document.getElementById("buuton");
  //   const buttonXS: HTMLElement | null = document.getElementById("buutonXS");

  //   if (text) {
  //     const count =
  //       window.pageYOffset < document.documentElement.clientHeight - 160
  //         ? document.documentElement.clientHeight / 2 + window.pageYOffset / 2
  //         : document.documentElement.clientHeight - 85;

  //     text.style.cssText = `padding-top: ${count}px`;
  //   }

  //   if (textXS && button) {
  //     const count =
  //       window.pageYOffset < document.documentElement.clientHeight - 160
  //         ? (document.documentElement.clientHeight - 160) / 2 +
  //           window.pageYOffset / 2
  //         : document.documentElement.clientHeight - 160;
  //     textXS.style.cssText = `padding-top: ${count}px`;
  //   }

  //   window.addEventListener("scroll", (event) => {
  //     if (text && button) {
  //       const count =
  //         window.pageYOffset < document.documentElement.clientHeight - 160
  //           ? document.documentElement.clientHeight / 2 + window.pageYOffset / 2
  //           : document.documentElement.clientHeight - 80;

  //       text.style.cssText = `padding-top: ${count}px`;
  //       button.style.cssText = `margin-top: ${
  //         30 -
  //           (window.pageYOffset / document.documentElement.clientHeight) * 30 >
  //         0
  //           ? 30 -
  //             (window.pageYOffset / document.documentElement.clientHeight) * 30
  //           : 0
  //       }px`;
  //     }

  //     if (textXS && buttonXS) {
  //       const count =
  //         window.pageYOffset < document.documentElement.clientHeight - 160
  //           ? (document.documentElement.clientHeight - 160) / 2 +
  //             window.pageYOffset / 2
  //           : document.documentElement.clientHeight - 160;
  //       textXS.style.cssText = `padding-top: ${count}px`;
  //       buttonXS.style.cssText = `margin-top: ${
  //         30 -
  //           (window.pageYOffset / document.documentElement.clientHeight) * 30 >
  //         0
  //           ? 30 -
  //             (window.pageYOffset / document.documentElement.clientHeight) * 30
  //           : 0
  //       }px`;
  //     }
  //   });
  // }, []);
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <VideoFace num={1} />
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <VideoFace num={2} />
      </Box>
      <Box className={styles.back} id="back">
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          className={styles.container}
          id="cont"
        >
          <Container maxWidth="lg">
            <Box className={styles.text} id="text">
              {/* <Box className={styles.logo}>Шашландия.рф</Box> */}
              <Box>
                Доставим все для
                <br />
                шашлыка и пикника!
              </Box>
              <Box>
                <button
                  id="buuton"
                  className={styles.button}
                  onClick={() => scrollToElem(".categories")}
                >
                  Начать покупки
                </button>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box
          sx={{ display: { xs: "flex", md: "none" } }}
          className={styles.container}
        >
          <Container maxWidth="lg">
            <Box className={styles.textXS} id="textXS">
              <Box>
                Доставим все для
                <br />
                шашлыка и пикника!
              </Box>
              <Box>
                <button
                  id="buutonXS"
                  onClick={() => scrollToElem(".categories")}
                  className={styles.button}
                >
                  Начать покупки
                </button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Face;
