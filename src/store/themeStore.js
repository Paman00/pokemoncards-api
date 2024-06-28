import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { THEME_TYPES } from '../constants';

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: THEME_TYPES.DEFAULT,
      setTheme: (theme) => set({ theme })
    }),
    {
      name: 'dark-theme'
    }
  )
);

export default useThemeStore;
