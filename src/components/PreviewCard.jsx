const PreviewCard = ({ id, src, alt, onFocusCard }) => {
  return (
    <img
      className='aspect-[8/11] h-full max-w-full cursor-pointer rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-110'
      src={src}
      alt={alt}
      onClick={() => onFocusCard(id)}
    />
  );
};

export { PreviewCard };
