import { createCss } from "@stitches/react";

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: {
    colors: {
      accent: "#FFFEA1",
      accentDark: "#CBC94C",
      background: "#FFFFFF",
      text: "#292929",
      textLight: "#757575",
    },
    space: {
      1: 15,
      2: 30,
    },
    fonts: {
      sans: "Source Sans Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    },
    fontSizes: {
      1: "14px",
      2: "18px",
      3: "24px",
      4: "48px",
    },
    fontWeights: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
  },
});

export const globalStyles = global({
  html: {
    fontSize: "$2",
  },

  body: {
    color: "$textLight",
    fontFamily: "$sans",
    fontWeight: "$normal",
  },
});