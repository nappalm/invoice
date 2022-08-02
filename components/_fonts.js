import { Global, css } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600&display=swap");
    `}
  />
);
export default Fonts;
