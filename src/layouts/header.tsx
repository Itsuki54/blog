"use client";

import { AppBar, Box, Link as MuiLink, Toolbar, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

type Props = {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
};

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const isTriggered = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!isTriggered}>
      {children ?? <div />}
    </Slide>
  );
}

export const Header = () => (
  <React.Fragment>
    <HideOnScroll>
      <AppBar
        component="header"
        sx={{
          backgroundColor: "#e97338",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Link aria-label="Home" href="/">
              <Image alt="itk-blog logo" height={48} src="/logo.png" width={48} />
            </Link>
          </Box>

          <Typography
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              flexGrow: 1,
            }}
            variant="h6"
          >
            Itsuki54のブログ
          </Typography>

          <nav>
            <Box sx={{ display: "flex", gap: 3 }}>
              <MuiLink
                color="inherit"
                component={Link}
                href="/"
                sx={{ fontWeight: "500" }}
                underline="hover"
              >
                Home
              </MuiLink>
              <MuiLink
                color="inherit"
                component={Link}
                href="/about"
                sx={{ fontWeight: "500" }}
                underline="hover"
              >
                About
              </MuiLink>
            </Box>
          </nav>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  </React.Fragment>
);
