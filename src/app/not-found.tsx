import {
  Box,
  Typography,
} from '@mui/material';
import Image from 'next/image';

export default function NotFound() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <Image alt='itk-blog logo' height={256} src='/logo.png' width={256} />
      <Typography variant='body1'>ページが見つかりません。</Typography>
    </Box>
  );
}
