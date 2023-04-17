import { StateCreator, create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCurrentUser } from '../api';

type StoreType = {
  count: number;
  themeMode: string;
  inc: () => void;
  user: object;
  getCurrentUser: (id: string) => void;
  changeTheme: () => void;
};

const createProductSlice: StateCreator<StoreType> = (set) => ({
  count: 1,
  themeMode: 'dark',
  user: {},
  inc: () => set((state) => ({ count: state.count + 1 })),
  getCurrentUser: async (id: string) => {
    const result = await getCurrentUser({ id });
    set(() => ({ user: result.data }));
  },
  changeTheme: async () => {
    set((state) => ({
      themeMode: state.themeMode === 'dark' ? 'light' : 'dark',
    }));
  },
});

export const useAppStore = create<StoreType>()(
  persist(
    (...a) => ({
      ...createProductSlice(...a),
    }),
    {
      name: 'store',
    },
  ),
);
