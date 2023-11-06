const theme = (mode) => {
  const mainColorPalette = {
    primary: "#e3ab57",
    secondary: "#f0932b",
  };

  const staticColorPalette = {
    primary: "#fafafa",
    secondary: "#333333",
    ternary: "rgba(180, 180, 180, 0.3)",
  };

  return {
    breakpoints: {
      values: {
        xs: 0, // Extra small devices (portrait phones)
        sm: 600, // Small devices (landscape phones)
        md: 960, // Medium devices (tablets)
        lg: 1280, // Large devices (desktops)
        xl: 1920, // Extra large devices (large desktops)
      },
    },

    typography: {
      fontFamily: 'inherit',
    },
    palette: {
      mode,
      ...(mode === "light"
        ? {
            main: mainColorPalette,
            text: {
              primary: staticColorPalette.primary,
              secondary: staticColorPalette.secondary,
            },
            static: staticColorPalette,
          }
        : {
            main: mainColorPalette,
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
