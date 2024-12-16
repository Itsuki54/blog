import {
  Avatar,
  Box,
  Container,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';

const AboutPage = () => (
  <Container sx={{ padding: { xs: 2, sm: 4 }, maxWidth: 'lg' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Stack
        alignItems='center'
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{ textAlign: 'center', sm: { textAlign: 'left' } }}
      >
        <Avatar sx={{ width: 120, height: 120, marginBottom: { xs: 2, sm: 0 } }}>
          <Image alt='Itsuki54' height={120} src='/icon.jpeg' width={120} />
        </Avatar>
        <Box>
          <Typography sx={{ fontWeight: 'bold', marginBottom: 0.5 }} variant='h4'>
            Itsuki54
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} variant='body1'>
            Software Engineer
          </Typography>
          <Stack direction='row' spacing={2} sx={{ marginTop: 1 }}>
            <Link href='https://qiita.com/Itsuki54' rel='noopener noreferrer' target='_blank'>
              <Image alt='Qiita' height={40} src='/qiita.png' width={40} />
            </Link>
            <Link href='https://github.com/Itsuki54' rel='noopener noreferrer' target='_blank'>
              <Image alt='Github' height={40} src='/github.png' width={40} />
            </Link>
          </Stack>
        </Box>
      </Stack>
      <Typography sx={{ marginTop: 4, textAlign: 'center' }} variant='h6'>
        ここは僕が日々の学びをアウトプットするためのブログです。<br />
        技術的なことから趣味のことまで幅広く書いていきます。<br />
      </Typography>
    </Box>
  </Container>
);

export default AboutPage;
