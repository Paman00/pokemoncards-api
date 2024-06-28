import { useThemeStore } from '@store/themeStore';
import { twMerge } from 'tailwind-merge';
import { THEME_TYPES } from '@constants';

import { MoonIcon, SunIcon, MonitorIcon } from '@components/Icons';
import { DropdownSelect } from './DropdownSelect';

export const ThemeIcon = ({ themeType, isSelected = false, className }) => {
  const Icon =
    themeType === THEME_TYPES.DARK
      ? MoonIcon
      : themeType === THEME_TYPES.LIGHT
        ? SunIcon
        : MonitorIcon;

  return (
    <Icon
      className={twMerge(
        'h-6 w-6',
        `${isSelected ? 'stroke-2' : 'stroke-1'}`,
        className
      )}
    />
  );
};

export const ThemeSelectorItem = ({ themeType, currentTheme }) => {
  const isSelected = currentTheme === themeType;

  return (
    <>
      <ThemeIcon themeType={themeType} isSelected={isSelected} />
      <span className={isSelected && 'font-bold'}>{themeType}</span>
    </>
  );
};

export const ThemeSelector = () => {
  const setTheme = useThemeStore((state) => state.setTheme);
  const theme = useThemeStore((state) => state.theme);

  const handleThemeChange = (newTheme) => {
    if (newTheme !== theme) {
      setTheme(newTheme);
    }
  };

  const themeOptions = Object.values(THEME_TYPES).map((themeType) => ({
    value: themeType,
    label: <ThemeSelectorItem themeType={themeType} currentTheme={theme} />
  }));

  return (
    <DropdownSelect
      menuPlacement='auto'
      options={themeOptions}
      onChange={(selectedOption) => handleThemeChange(selectedOption.value)}
      value={themeOptions.find((option) => option.value === theme)}
    />
  );
};
