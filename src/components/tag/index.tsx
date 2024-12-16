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
  <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
    <Chip
      icon={
        <Icon
          icon={category.icon}
          style={{
            fontSize: 14,
          }}
        />
      }
      label={category.name}
      sx={{
        fontWeight: 'bold',
      }}
      variant='outlined'
    />
  </Box>
);
