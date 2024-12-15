import { Box } from '@mui/material';
import Image from 'next/image';

export default function NotFound() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <Image alt='itk-blog logo' height={256} src='/logo.png' width={256} />
      <p>Sorry, the page you are looking for does not exist.</p>
    </Box>
  );
}
