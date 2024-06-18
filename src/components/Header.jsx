const Header = ({ children }) => {
  return (
    <header className='h-16'>
      <nav className='fixed top-0 z-20 mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between rounded-b-md bg-yellow-900 p-2 text-black shadow-md sm:justify-center md:rounded-b-[50%]'>
        {children}
      </nav>
    </header>
  );
};

export { Header };
