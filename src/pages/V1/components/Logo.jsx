import imgLogo from '@assets/images/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <figure className='m-0 flex aspect-square h-full items-center'>
      <Link to='/'>
        <img
          className='w-full rounded-[25%]'
          src={imgLogo}
          alt='Pokemon logo'
        />
      </Link>
    </figure>
  );
};

export { Logo };
