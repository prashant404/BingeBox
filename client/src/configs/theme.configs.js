import { createTheme } from "@mui/material/styles";

export const themeModes = {
  dark: "dark",
  light: "light"
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette = mode === themeModes.dark ? {
      primary: {
        main: "#e91e63", // Pink
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#ff4081", // Pink
        contrastText: "#ffffff"
      },
      background: {
        default: "#121212",
        paper: "#333333"
      }
    } : {
      primary: {
        main: "#f50057", // Light Pink
        contrastText: "#000000"
      },
      secondary: {
        main: "#ff4081", // Pink
        contrastText: "#000000"
      },
      background: {
        default: "#ffffff",
      }
    };

    return createTheme({
      palette: {
        mode,
        ...customPalette
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true }
        }
      },
      typography: {
        fontFamily: 'Poppins, sans-serif', // Add Poppins font family
      }
    });
  }
};

export default themeConfigs;
