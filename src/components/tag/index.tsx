import { Icon } from '@iconify/react';
import {
  Box,
  Chip,
} from '@mui/material';

import type { EndPoints } from '@/types/cms-types';

export const Tag = ({
  category,
}: {
  category: EndPoints['get']['categories'];
}) => (
  <Box sx={{ display: 'inline-flex', alignItems: 'center', padding: 1 }}>
    <Chip
      icon={
        <Icon
          icon={category.icon}
          style={{
            fontSize: 20,
          }}
        />
      }
      label={category.name}
      sx={{
        fontWeight: 'bold',
        padding: '0 4px',
      }}
      variant='outlined'
    />
  </Box>
);
