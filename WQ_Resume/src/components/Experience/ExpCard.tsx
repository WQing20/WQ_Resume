import React from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
const experience = [
  "Worked on several projects independently.",
  "Using the SDLC in those projects that are done independently.",
  "Self Handle sereval projects including the UI design , Structure Configuration , Code Implementation , Testing , Maintenance",
  "Integration with multiple company systems",
];
export default function ExpCard() {
  return (
    <Card
      sx={{
        height: "100%",
        background: "#394151",
        borderRadius: 3,
        padding: 3,

        boxShadow: "0 0 10px #455375, 0 0 20px  #455375",
        transition: "box-shadow 0.4s ease",
        "&:hover": {
          boxShadow: "0 0 10px #153a92ff, 0 0 20px #153a92ff",
        },
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          mb={0}
          sx={{
            color: "#9dc5fe",
            fontWeight: 600,
          }}
        >
          Junior Software Developer - Raptor POS
        </Typography>
        <Typography
          variant="subtitle1"
          mb={0}
          sx={{
            color: "#9dc5fe",
            fontWeight: 600,
          }}
        >
          2023 JUN - Present
        </Typography>
        <List>
          {experience.map((experience, index) => (
            <ListItem
              sx={{ py: 0.5, px: 0, alignItems: "flex-start" }}
              key={index}
            >
              <ListItemIcon sx={{ minWidth: "32px", mt: 2 }}>
                <FiberManualRecord sx={{ fontSize: 8, color: "#9dc5fe" }} />
                {/* <Typography variant="h6" sx={{ color: "#9dc5fe" }}></Typography> */}
              </ListItemIcon>
              <ListItemText
                primary={experience}
                primaryTypographyProps={{
                  variant: "h6",
                  sx: { color: "#9dc5fe" },
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
