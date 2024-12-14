import {
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Image from 'next/image';

import { blogs } from '@/types/cms-types';

export const Card = ({ blog }: { blog: blogs; }) => (
  <MuiCard
    sx={{
      border: '1px solid #e97338',
      borderRadius: 2,
      backgroundColor: '#f8f8f8',
      width: 300,
      height: '100%',
    }}
  >
    <CardActionArea
      href={`/blog/${blog.id}`}
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <CardMedia
        sx={{
          position: 'relative',
          aspectRatio: '16/9',
          overflow: 'hidden',
        }}
      >
        <Image
          alt='thumbnail'
          fill
          src={blog.eyecatch.url}
          style={{ objectFit: 'cover' }}
        />
      </CardMedia>
      <CardContent sx={{ gap: 4, flex: 1 }}>
        <Typography
          component='div'
          sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: 'auto',
            fontWeight: 'bold',
            fontSize: {
              xs: '0.75rem',
              sm: '0.875rem',
              md: '1rem',
            },
          }}
          variant='h6'
        >
          {blog.title}
        </Typography>
        <Typography
          color='textSecondary'
          position='absolute'
          sx={{
            bottom: 8,
            right: 8,
            color: '#555',
            fontSize: '0.9rem',
          }}
          variant='body2'
        >
          {new Date(blog.publishedAt).toLocaleDateString()}
        </Typography>
      </CardContent>
    </CardActionArea>
  </MuiCard>
);
