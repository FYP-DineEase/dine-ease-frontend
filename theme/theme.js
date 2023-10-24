const theme = (mode) => {
  const staticColorPalette = {
    primary: "#f5f5f5",
    secondary: "#333333",
  };

  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            main: {
              primary: "#e3ab57",
              secondary: "#f0932b",
            },
            text: {
              primary: staticColorPalette.primary,
              secondary: staticColorPalette.secondary,
            },
            static: staticColorPalette,
          }
        : {
            main: {
              primary: "#e3ab57",
              secondary: "#f0932b",
            },
            text: {
              primary: staticColorPalette.secondary,
              secondary: staticColorPalette.primary,
            },
            static: staticColorPalette,
          }),
    },
  };
};

export default theme;
