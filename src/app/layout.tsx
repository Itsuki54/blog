import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import { Footer } from "@/layouts/footer";
import { Header } from "@/layouts/header";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "itk-blog",
  description: "itk's blog",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Header />
          <Box
            sx={{
              padding: 8,
              overflow: "hidden",
              paddingBlock: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {children}
          </Box>
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
