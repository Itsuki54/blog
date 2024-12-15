import { Icon } from '@iconify/react';

import type { EndPoints } from '@/types/cms-types';

export const Tag = ({ category }: { category: EndPoints['get']['categories']; }) => (
  <div>
    <Icon icon={category.icon} />
    <span>{category.name}</span>
  </div>
)