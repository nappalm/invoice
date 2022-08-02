import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#fff", "#202023")(props),
    },
  }),
};

const components = {
  Tooltip: {
    baseStyle: {
      bg: "#000",
      borderRadius: "md",
    },
  },
  Button: {
    variants: {
      dark: {
        bg: "#000",
        color: "#fff",
      },
      blue: {
        bg: "#0093f5",
        color: "#fff",
        boxShadow: "rgb(0 0 0) 0.25rem 0.25rem",
        border: "2px solid",
        borderColor: "#000",
      },
    },
    defaultProps: {
      variant: "dark",
    },
  },
  Input: {
    variants: {
      editable: {
        field: {
          border: "1px solid transparent",
          bg: "inherit",
          _hover: {
            borderColor: "#000",
            border: "1px dashed",
          },
          _focus: {
            borderColor: "#000",
            border: "1px dashed",
          },
        },
      },
    },
    defaultProps: {
      variant: "editable",
      size: "sm",
    },
  },
  Textarea: {
    variants: {
      editable: {
        border: "1px solid transparent",
        _hover: {
          borderColor: "#000",
          border: "1px dashed",
        },
        _focus: {
          borderColor: "#000",
          border: "1px dashed",
        },
      },
    },
    defaultProps: {
      variant: "editable",
    },
  },
  Box: {
    variants: {
      "box-image": {
        borderRadius: "lg",
        border: "2px dashed",
        borderColor: "#000",
      },
    },
  },
};

const fonts = {
  heading: "Urbanist",
  body: "Urbanist",
};

const colors = {};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
