import { StateCreator } from 'zustand';

export type ProductSliceType = {
	count: number;
	count2: number;
	inc: () => void;
};

export const productSlice: StateCreator<ProductSliceType> = set => ({
	count: 1,
	count2: 1,
	inc: () => set(state => ({ count: state.count + 1 }))
});
