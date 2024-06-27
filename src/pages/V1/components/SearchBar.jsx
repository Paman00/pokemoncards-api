import { Search } from '@components/Icons/Search';

const SearchBar = ({ search, onChangeSearch, onSearch }) => {
  return (
    <div className='ml-1 flex h-full'>
      <input
        className='rounded-s-md bg-[#f5f5dc] px-3 focus:bg-white focus:-outline-offset-1 focus:outline-orange-500'
        value={search}
        onChange={(event) => onChangeSearch(event.target.value)}
        placeholder='Search'
        onKeyUp={onSearch}
      />
      <button
        className='flex aspect-square h-full cursor-pointer items-center justify-center rounded-r-md border-l border-solid border-yellow-900 bg-[#f5f5dc]'
        type='button'
        onClick={onSearch}
      >
        <Search className='aspect-square w-full stroke-2 text-yellow-900' />
      </button>
    </div>
  );
};

export { SearchBar };
