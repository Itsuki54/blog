import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import { Card } from '@/components/card';
import { Heading } from '@/components/heading';
import { client } from '@/lib/client';

import type { EndPoints } from '@/types/cms-types';

export default async function Home() {
  const blogs = await client.get<EndPoints['gets']['blogs']>({
    endpoint: 'blogs',
  });

  return (
    <>
      <Heading>
        記事一覧
      </Heading>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'center' }}
      >
        {blogs.contents.map(blog => (
          <Grid
            key={blog.id}
            sx={{ display: 'flex', justifyContent: 'flex-start', md: 4, sm: 6, xs: 12 }}
          >
            <Box sx={{ height: '100%' }}>
              <Card blog={blog as any} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
