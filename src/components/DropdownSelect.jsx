import Select, { components } from 'react-select';
import { ChevronDown2Icon } from './Icons';
import { twMerge } from 'tailwind-merge';

const DropdownIndicator = ({ children, ...props }) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDown2Icon className='h-full w-full stroke-2' />
    </components.DropdownIndicator>
  );
};

export const DropdownSelect = ({ ...props }) => {
  return (
    <Select
      components={{
        DropdownIndicator
      }}
      unstyled
      isSearchable={false}
      className=''
      classNames={{
        container: () => 'w-auto h-auto',
        control: () =>
          'flex !min-h-max items-center rounded-md border-2 border-black bg-white dark:border-white dark:bg-black dark:text-white',
        valueContainer: () => 'h-full',
        indicatorsContainer: () =>
          'relative flex aspect-square items-center px-1 py-2',
        indicatorSeparator: () => '',
        singleValue: () => 'flex h-full items-center gap-2 p-2',
        dropdownIndicator: (state) =>
          `!transition-transform !duration-200 ${state.selectProps.menuIsOpen ? 'rotate-180' : 'rotate-0'}`,
        menu: () =>
          'mt-1 w-full rounded-md border-2 border-black shadow-md dark:border-white dark:shadow-lg',
        menuList: () =>
          'flex w-full flex-col items-center rounded-md bg-white py-1 dark:bg-black dark:text-white',
        option: (state) =>
          twMerge(
            '!flex w-full flex-row gap-2 border-y-2 p-2 text-black transition-colors hover:bg-gray-200 dark:text-white dark:hover:bg-gray-900',
            state.isSelected
              ? 'border-black font-bold dark:border-white'
              : 'border-transparent'
          )
      }}
      {...props}
    />
  );
};
