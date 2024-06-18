const ModalCard = ({ children }) => {
  return (
    <div className='fixed left-0 top-0 z-10 flex h-full max-h-full w-full items-center justify-center bg-black bg-opacity-80 pt-16'>
      {children}
    </div>
  );
};

export { ModalCard };
