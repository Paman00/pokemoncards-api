import imgLogo from '../assets/images/DALLE_Logo.png';

const Logo = () => {
  return (
    <figure className='m-0 flex aspect-square h-full items-center'>
      <img className='w-full rounded-[25%]' src={imgLogo} alt='Pokemon logo' />
    </figure>
  );
};

export { Logo };
