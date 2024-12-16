'use client';

import { Box } from '@mui/material';
import { useEffect } from 'react';
import * as tocbot from 'tocbot';

import { Agenda } from './agenda';
import { Content } from './content';

export const Article = ({ content }: { content: string; }) => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector: '.js-toc-content',
      headingSelector: 'h1, h2, h3, h4',
      scrollSmooth: true,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <Box sx={{ display: 'flex', overflow: 'hidden' }}>
      <Content content={content} sx={{ width: '80%' }} />
      <Agenda
        sx={{
          width: {
            xs: '0',
            sm: '20%',
          },
          display: {
            xs: 'none',
            sm: 'block',
          },
        }}
      />
    </Box>
  );
};
