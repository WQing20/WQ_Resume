import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const skills = ["C++", "C#", "Java", "JavaScript", "HTML5"];
export default function SkillCard() {
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
          variant="h5"
          mb={0}
          sx={{
            color: "#9dc5fe",
            fontWeight: 600,
          }}
        >
          Programming Language
        </Typography>
        <List>
          {skills.map((skill, index) => (
            <ListItem sx={{ py: 0.5, px: 0 }} key={index}>
              <ListItemIcon sx={{ minWidth: "32px" }}>
                <Typography variant="h6" sx={{ color: "#9dc5fe" }}>
                  →
                </Typography>
              </ListItemIcon>
              <ListItemText
                primary={skill}
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
