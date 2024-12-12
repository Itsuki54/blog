import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const Footer = () => (
  <AppBar
    position="relative"
    sx={{
      top: "auto",
      bottom: 0,
      marginTop: "auto",
      backgroundColor: "#e97338",
    }}
  >
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography component="div" variant="body1">
        © 2024 Itsuki54
      </Typography>
    </Toolbar>
  </AppBar>
);
