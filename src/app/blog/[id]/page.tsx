import { Icon } from '@iconify/react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';

import { Article } from '@/components/article';
import { Tag } from '@/components/tag';
import { client } from '@/lib/client';

import type { EndPoints } from '@/types/cms-types';

export default async function Blog({ params }: { params: { id: string; }; }) {
  const { id } = await params;
  const blog = await client.get<EndPoints['get']['blogs']>({
    endpoint: 'blogs',
    contentId: id,
  });

  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      <Typography
        component='h1'
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
        }}
        variant='h4'
      >
        {blog.title}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        {blog.categories?.map(category => <Tag category={category} key={category.id} />)}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'end', gap: 2 }}>
        <Typography color='textSecondary' gutterBottom variant='subtitle1'>
          更新日:
          {new Date(blog.updatedAt).toLocaleDateString()}
        </Typography>
        <Typography color='textSecondary' gutterBottom variant='subtitle1'>
          作成日:
          {new Date(blog.createdAt).toLocaleDateString()}
        </Typography>
      </Box>
      <Article content={blog.content} />
    </Container>
  );
}
