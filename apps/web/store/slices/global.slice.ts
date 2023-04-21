import { IUser } from 'backend/models/User';
import { getCurrentUser } from 'client/api';
import { signOut } from 'next-auth/react';
import { StateCreator } from 'zustand';

export type GlobalSliceType = {
	themeMode: string;
	user: IUser;
	signOut: () => void;
	getCurrentUser: (id: string) => void;
	changeTheme: () => void;
};

const emptyUser = {
	email: '',
	userName: ''
};

export const globalSlice: StateCreator<GlobalSliceType> = set => ({
	themeMode: 'dark',
	user: emptyUser,
	signOut: async () => {
		signOut({ redirect: false });
		set({ user: emptyUser });
	},
	getCurrentUser: async (id: string) => {
		const result = await getCurrentUser({ id });
		set({ user: result.data });
	},
	changeTheme: async () => {
		set(state => ({
			themeMode: state.themeMode === 'dark' ? 'light' : 'dark'
		}));
	}
});
