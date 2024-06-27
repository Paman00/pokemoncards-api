import { ExternalLink } from '@components/Icons/ExternalLink';

const Footer = () => {
  return (
    <footer className='rounded-t-lg bg-gray-300 py-4'>
      <div className='p-4'>
        <p>
          Using the{' '}
          <a
            className='inline-flex items-center font-semibold transition-colors duration-200 ease-in-out hover:text-yellow-900'
            href='https://dev.pokemontcg.io/'
            target='_blank'
            rel='noreferrer'
          >
            Pokémon TGC API <ExternalLink className='h-4' />
          </a>
        </p>
      </div>
      <hr className='m-0' />
      <div className='p-4'>
        <h5>
          © 2023 | Developed and designed by{' '}
          <a
            className='inline-flex items-center font-semibold transition-colors duration-200 ease-in-out hover:text-yellow-900'
            href='https://www.linkedin.com/in/angel-garcia-beltran'
            target='_blank'
            rel='noreferrer'
          >
            Miguel Angel Garcia Beltrán <ExternalLink className='h-4' />
          </a>
        </h5>
      </div>
    </footer>
  );
};

export { Footer };
