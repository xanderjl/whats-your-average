import * as React from "react"
import { css, Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={css`
      /* Helvetica */
      @font-face {
        font-family: "Helvetica";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("./Helvetica.ttf") format("truetype");
      }
    `}
  />
)

export default Fonts
