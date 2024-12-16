import {
  Box,
  SxProps,
  Theme,
} from '@mui/material';

type ContentProps = {
  content: string;
  sx?: SxProps<Theme>;
};

export const Content = ({ content, sx }: ContentProps) => (
  <Box
    className='js-toc-content'
    dangerouslySetInnerHTML={{ __html: content }}
    sx={{
      'flex': 1,
      'padding': 1,
      '& img': { maxWidth: '100%', height: 'auto' },
      '& p': { marginBottom: 2 },
      '& h1, & h2, & h3': { margin: '8px 0', fontWeight: 'bold' },
      '& ul': { paddingLeft: 3, listStyleType: 'disc' },
      '& ol': { paddingLeft: 3, listStyleType: 'decimal' },
      '& a': { 'color': 'primary.main', 'textDecoration': 'none', '&:hover': { textDecoration: 'underline' } },
      ...sx,
    }}
  />
);
