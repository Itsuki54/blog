import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import { Card } from "@/components/card";
import { client } from "@/lib/client";

import type { EndPoints } from "@/types/cms-types";

export default async function Home() {
  const blogs = await client.get<EndPoints["gets"]["blogs"]>({
    endpoint: "blogs",
  });

  return (
    <>
      <Typography sx={{ textAlign: "start", fontWeight: "bold", padding: 2 }} variant="h4">
        記事一覧
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "center" }}
      >
        {blogs.contents.map((blog) => (
          <Grid key={blog.id} sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Box sx={{ height: "100%" }}>
              <Card blog={blog} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
