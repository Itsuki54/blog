import {
  Box,
  SxProps,
  Theme,
} from '@mui/material';

type Props = {
  sx?: SxProps<Theme>;
};

export const Agenda = ({ sx }: Props) => (
  <Box
    className='js-toc'
    sx={{
      ...sx,
      'padding': 1,
      'position': 'sticky',
      'overflowY': 'auto',
      'borderLeft': '1px solid #ddd',
      'zIndex': 1,
      'fontSize': '14px',
      'lineHeight': 1.6,
      '& a': {
        textDecoration: 'none',
        color: '#333',
        display: 'block',
        padding: '4px 0',
      },
      '& a:hover': {
        color: '#1976d2',
      },
    }}
  />
);
