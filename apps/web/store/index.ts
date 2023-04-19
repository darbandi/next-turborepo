import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProductSliceType, productSlice, globalSlice, GlobalSliceType } from './slices';

type AppStoreType = ProductSliceType & GlobalSliceType;

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
