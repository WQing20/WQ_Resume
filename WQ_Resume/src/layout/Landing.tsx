import { Box, Button, Typography, useTheme } from "@mui/material";
type LandingProps = {
  isMobile: boolean;
};
export default function Landing({ isMobile }: LandingProps) {
  const theme = useTheme();
  console.log("isMobile:", isMobile);

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: 5, sm: 10, md: 15 },
          gap: 3,
          background: theme.gradients.primary,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          fontWeight={600}
          //   variant="h2"
          textAlign={"center"}
          color="#ffffffff"
        >
          Software Programmer
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h4"}
          color="#ffffffff"
          textAlign={"center"}
        >
          Crafting innovative solutions with code, passion, and precision.
        </Typography>
        <Button
          sx={{
            borderRadius: 13,
            bgcolor: theme.palette.secondary.main,
          }}
        >
          <Typography
            variant="h6"
            fontWeight={500}
            color="#000000"
            textAlign={"center"}
            px={2}
          >
            Know More
          </Typography>
        </Button>
      </Box>
    </>
  );
}
