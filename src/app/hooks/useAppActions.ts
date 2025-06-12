import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../store';

import type { AppDispatch } from '../store';

export const useAppActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
