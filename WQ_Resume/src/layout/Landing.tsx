import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { fadeUpConfig, slideInLeftConfig, zoomInConfig } from "../animation";
import SkillCard from "../components/Skill/SkillCard";
import SkillCard2 from "../components/Skill/SkillCard2";
import SkillCard3 from "../components/Skill/SkillCard3";
import ExpCard from "../components/Experience/ExpCard";
type LandingProps = {
  isMobile: boolean;
};
export default function Landing({ isMobile }: LandingProps) {
  const theme = useTheme();

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
        <motion.div {...slideInLeftConfig}>
          <Typography
            variant={isMobile ? "h4" : "h2"}
            fontWeight={600}
            //   variant="h2"
            textAlign={"center"}
            color="#ffffffff"
          >
            Software Programmer
          </Typography>
        </motion.div>

        <motion.div {...fadeUpConfig}>
          <Typography
            variant={isMobile ? "h6" : "h4"}
            color="#ffffffff"
            textAlign={"center"}
          >
            Crafting innovative solutions with code, passion, and precision.
          </Typography>
        </motion.div>

        <motion.div {...fadeUpConfig}>
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
        </motion.div>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          // justifyContent: "center",
          alignItems: "center",
          paddingY: { xs: 5, sm: 7, md: 10 },
          paddingX: { xs: 5, sm: 7, md: 10 },
          gap: 3,
          background: "#434454",
          // background: "#ffffff",
        }}
      >
        <motion.div {...slideInLeftConfig}>
          <Typography
            variant={isMobile ? "h4" : "h2"}
            fontWeight={600}
            color="#eec806"
          >
            Skills
          </Typography>
        </motion.div>

        <motion.div {...zoomInConfig}>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <SkillCard />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <SkillCard2 />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <SkillCard3 />
            </Grid>
          </Grid>
        </motion.div>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          // justifyContent: "center",
          alignItems: "center",
          paddingY: { xs: 5, sm: 7, md: 10 },
          paddingX: { xs: 5, sm: 7, md: 10 },
          gap: 3,
          background: "#4c535e",
          // background: "#ffffff",
        }}
      >
        <motion.div {...slideInLeftConfig}>
          <Typography
            variant={isMobile ? "h4" : "h2"}
            fontWeight={600}
            color="#eec806"
          >
            Experiences
          </Typography>
        </motion.div>

        <motion.div {...zoomInConfig}>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid size={{ xs: 12, md: 12 }}>
              <ExpCard />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <ExpCard />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <ExpCard />
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </>
  );
}
