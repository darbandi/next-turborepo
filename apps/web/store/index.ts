import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { productSlice, globalSlice } from './slices';
import { AppStoreType } from 'client/types';

export const useAppStore = create<AppStoreType>()(
	persist(
		(...a) => ({
			...globalSlice(...a),
			...productSlice(...a)
		}),
		{
			name: 'store'
		}
	)
);
