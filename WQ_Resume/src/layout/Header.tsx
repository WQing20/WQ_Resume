import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";

type HeaderProps = {
  isMobile: boolean;
};

export default function Header({ isMobile }: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const theme = useTheme();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        // width: `calc(100% - ${
        //   !isMobile ? (open ? drawerWidthOpen : drawerWidthClosed) : 0
        // }px)`,
        // ml: !isMobile
        //   ? open
        //     ? `${drawerWidthOpen}px`
        //     : `${drawerWidthClosed}px`
        //   : 0,
        // padding: isMobile ? 0 : undefined,
        transition: "margin 1.3s ease, width 0.3s ease",
        background: theme.gradients.primary,
        // color: "primaryBg.contrastText",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ fontWeight: 600, ml: isMobile ? 1 : 0 }}
          >
            Wei Qing
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          {isMobile ? (
            <>
              {" "}
              <IconButton sx={{ padding: 0 }} onClick={handleClick}>
                <MenuIcon sx={{ color: "#ffffff" }} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                PaperProps={{
                  sx: { mt: 1.5, minWidth: 160 },
                }}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>Skill</MenuItem>
                <MenuItem onClick={handleClose}>Experience</MenuItem>
                <MenuItem onClick={handleClose}>Project</MenuItem>
                <MenuItem onClick={handleClose}>Education</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              {" "}
              <Tabs
                value={value}
                onChange={handleTabChange}
                textColor="inherit"
                sx={{
                  flexGrow: 1,
                  pl: 4, // spacing between title and tabs
                  ".MuiTab-root": {
                    fontSize: "1rem", // font size
                    textTransform: "none", // keep original case
                    color: "#ffffff", // default color
                    "&.Mui-selected": {
                      color: "#ffffff", // selected color
                      fontWeight: "bold", // bold on selected
                    },
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "secondary.main", // change text color on hover
                    },
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#ffffff",
                    height: 3,
                  },
                }}
              >
                <Tab label="Home" />
                <Tab label="Skill" />
                <Tab label="Experience" />
                <Tab label="Project" />
                <Tab label="Education" />
              </Tabs>
            </>
          )}

          {/* <Tooltip title="Raptor">
            <IconButton onClick={handleClick} sx={{ p: 0 }}>
              <Avatar alt="User" />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            PaperProps={{
              sx: { mt: 1.5, minWidth: 160 },
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
