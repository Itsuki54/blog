import { Typography } from '@mui/material';

type HeadingProps = {
  children: React.ReactNode;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Heading: React.FC<HeadingProps> = ({ children, component = 'h1' }) => (
  <Typography
    component={component}
    gutterBottom
    sx={{
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
    }}
    variant='h4'
  >
    {children}
  </Typography>
);
