import { lazy, Suspense } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@components/ThemeProvider';
import { ThemeSelector } from '@components/ThemeSelector';

const V0Page = lazy(() => import('@pages/V1/V1Page'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter basename='/pokemoncards-api/'>
        <ThemeProvider />
        <Routes>
          <Route
            path='/'
            element={
              <div className='flex h-screen w-full flex-col items-center justify-center gap-4 bg-white text-black transition-colors dark:bg-black dark:text-white'>
                <div className='rounded border-2 border-black text-center dark:border-white'>
                  <h1 className='rounded-t bg-black p-1 font-bold text-white dark:bg-white dark:text-black'>
                    {'🚧🚧 '}
                    <span className='text-inherit underline'>
                      Work in progress
                    </span>
                    {' 🚧🚧'}
                  </h1>
                  <Link to='/v1' className='block p-1 font-bold'>
                    {' -> '}
                    <span className='font-normal1 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-[width] after:duration-300 hover:after:w-full dark:after:bg-white'>
                      Go to Version 1
                    </span>
                    {' <- '}
                  </Link>
                </div>
                <ThemeSelector />
              </div>
            }
          />
          <Route path='/v1' element={<V0Page />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
