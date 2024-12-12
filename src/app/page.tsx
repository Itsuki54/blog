import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

import { Card } from "@/components/card";
import { client } from "@/lib/client";

import type { EndPoints } from "@/types/cms-types";

export default async function Home() {
  const blogs = await client.get<EndPoints["gets"]["blogs"]>({
    endpoint: "blogs",
  });

  return (
    <Box sx={{ padding: 4, overflow: "hidden" }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "stretch" }}
      >
        {blogs.contents.map((blog) => (
          <Grid key={blog.id}>
            <Box sx={{ height: "100%" }}>
              <Card blog={blog} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
