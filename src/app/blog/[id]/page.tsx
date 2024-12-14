import {
  Box,
  Container,
  Typography,
} from '@mui/material';

import { Article } from '@/components/article';
import { client } from '@/lib/client';

import type { EndPoints } from '@/types/cms-types';

export default async function Blog({ params }: { params: { id: string; }; }) {
  const { id } = await params;
  const blog = await client.get<EndPoints['get']['blogs']>({
    endpoint: 'blogs',
    contentId: id,
  });

  return (
    <Container maxWidth='md' sx={{ py: 4 }}>
      <Typography component='h1' gutterBottom variant='h4'>
        {blog.title}
      </Typography>
      <Typography color='textSecondary' gutterBottom variant='subtitle1'>
        {new Date(blog.updatedAt).toLocaleDateString()}
      </Typography>
      <Article content={blog.content} />
    </Container>
  );
}
