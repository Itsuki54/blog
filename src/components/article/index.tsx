"use client";

import { Box } from "@mui/material";
import DOMPurify from "dompurify";

export const Article = ({ content }: { content: string }) => {
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <Box
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      sx={{
        mt: 4,
        "& img": { maxWidth: "100%", height: "auto" },
        "& p": { marginBottom: 2 },
      }}
    />
  );
};
