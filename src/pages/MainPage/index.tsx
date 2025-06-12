import React from 'react';
import { Box } from '@mui/material';

import { useAppSelector } from '../../app/hooks';
import { getGlobalField } from '../../app/selectors/global.selector';

const MainPage = () => {
  const title = useAppSelector(getGlobalField('title'));

  return <Box className="text-center text-3xl font-bold">{title}</Box>;
};

export default React.memo(MainPage);
