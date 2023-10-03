const theme = () => {
  return {
    typography: {
      allVariants: {
        fontFamily: '"Montserrat", sans-serif',
        textTransform: "none",
      },
    },
    pallete: {
      main: {
        primary: "whitesmoke",
        secondary: "black",
      },
      text: {
        primary: "rgb(255,255,255)",
        secondary: "rgb(0,0,0)",
      },
      button: {
        primary: "pink",
      },
      static: {
        primary: "rgb(0, 0, 0)",
        secondary: "rgb(255, 255, 255)",
        other: "rgb(112,112,112)",
      },
    },
  };
};

export default theme;
