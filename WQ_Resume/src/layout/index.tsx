import Header from "./Header";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import Landing from "./Landing";

export default function index() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  console.log("isMobile:", isMobile);

  return (
    <>
      <Header isMobile={isMobile}></Header>
      <Box sx={{ ...theme.mixins.toolbar }} /> {/* Spacer */}
      <Landing isMobile={isMobile} />
      {/* <Box sx={{ mt: 8 }}>
        <Landing isMobile={isMobile} />
      </Box> */}
    </>
  );
}
