import { useEffect } from 'react';
import { useThemeStore } from '@store/themeStore';
import { THEME_TYPES } from '@constants';

export const ThemeProvider = ({ children }) => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const mediaWatcher = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = (isWindowDarkMode) => {
      const isDarkTheme =
        (theme === THEME_TYPES.DEFAULT && isWindowDarkMode) ||
        theme === THEME_TYPES.DARK;

      if (isDarkTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    const handleThemeChange = (e) => {
      const isWindowDarkMode = e.matches;
      updateTheme(isWindowDarkMode);
    };

    mediaWatcher.addEventListener('change', handleThemeChange);

    updateTheme(mediaWatcher.matches);

    return () => {
      mediaWatcher.removeEventListener('change', handleThemeChange);
    };
  }, [theme]);

  return children || null;
};
