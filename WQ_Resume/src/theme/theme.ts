// src/theme.ts
import {
  createTheme,
  type PaletteColor,
  type PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    gradients: {
      primary: string;
    };
  }
  interface ThemeOptions {
    gradients?: {
      primary?: string;
    };
  }
  interface Palette {
    primaryBg: PaletteColor;
    secondaryBg: PaletteColor;
  }
  interface PaletteOptions {
    primaryBg: PaletteColorOptions;
    secondaryBg?: PaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    mode: "light", // or 'dark'
    primary: {
      main: "#1f2937cc",
      light: "#FFB1AF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFB300",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    primaryBg: {
      main: "#6093e1ff",
      light: "#1976d2",
      contrastText: "#000000",
    },
    secondaryBg: {
      main: "#FFDEBD",
      light: "#1976d2",
      contrastText: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
      disabled: "",
    },
    grey: {
      50: "#f8fafc",
      100: "#eef2f6",
      200: "#e3e8ef",
      500: "#697586",
      600: "#4C4747",
      700: "#364152",
      900: "#121926",
    },
  },
  gradients: {
    primary:
      "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.9))",
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif", // Or Roboto if using @fontsource/roboto
  },
  //   components: {
  //     MuiAppBar: {
  //       styleOverrides: {
  //         root: {
  //           background: "linear-gradient(135deg, #1976d2, #42a5f5)",
  //         },
  //       },
  //     },
  //   },
  //   typography: {
  //     fontFamily: "Roboto, sans-serif",
  //   },
  //   components: {
  //     MuiButton: {
  //       styleOverrides: {
  //         root: {
  //           borderRadius: 8,
  //         },
  //       },
  //     },
  //   },
});

export default theme;
