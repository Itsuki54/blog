import {
  Box,
  Container,
  Typography,
} from '@mui/material';

import { Article } from '@/components/article';
import { Heading } from '@/components/heading';
import { Tag } from '@/components/tag';
import { client } from '@/lib/client';

import type { EndPoints } from '@/types/cms-types';

export default async function Blog({ params }: { params: Promise<{ id: string; }>; }) {
  const { id } = await params;
  const blog = await client.get<EndPoints['get']['blogs']>({
    endpoint: 'blogs',
    contentId: id,
  });

  return (
    <Container maxWidth='lg'>
      <Heading>
        {blog.title}
      </Heading>
      <Box sx={{ display: 'flex', gap: 2, padding: 1 }}>
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
