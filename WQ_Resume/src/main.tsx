import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import themes from "./theme/theme";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
