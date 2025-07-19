import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

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
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, ml: isMobile ? 1 : 0 }}
          >
            Wei Qing
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="secondary"
            sx={{
              flexGrow: 1,
              ml: 4, // spacing between title and tabs
            }}
          >
            <Tab label="Home" />
            <Tab label="Skill" />
            <Tab label="Experience" />
            <Tab label="Project" />
            <Tab label="Education" />
          </Tabs>
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
