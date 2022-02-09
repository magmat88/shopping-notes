import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './redux/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`

//useSelector reads a value from the store state and subscribes to updates, 
//useDispatch returns the store's dispatch method to let you dispatch actions.

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
