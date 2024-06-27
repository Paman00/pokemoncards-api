import { create } from 'zustand';
import { THEME_TYPES } from '../constants';

export const useThemeStore = create((set) => ({
  theme: THEME_TYPES.DEFAULT,
  setTheme: (theme) => set({ theme })
}));
