import { getCurrentUser } from 'client/api';
import { signOut } from 'next-auth/react';
import { StateCreator } from 'zustand';

export type GlobalSliceType = {
	themeMode: string;
	user: object;
	signOut: () => void;
	getCurrentUser: (id: string) => void;
	changeTheme: () => void;
};

export const globalSlice: StateCreator<GlobalSliceType> = set => ({
	themeMode: 'dark',
	user: {},
	signOut: async () => {
		signOut({ redirect: false });
		set({ user: {} });
	},
	getCurrentUser: async (id: string) => {
		const result = await getCurrentUser({ id });
		console.log(result.data);

		set({ user: result.data });
	},
	changeTheme: async () => {
		set(state => ({
			themeMode: state.themeMode === 'dark' ? 'light' : 'dark'
		}));
	}
});
