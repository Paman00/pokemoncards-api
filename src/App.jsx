import { lazy, Suspense } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

const V0Page = lazy(() => import('@pages/V1/V1Page'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter basename='/pokemoncards-api/'>
        <Routes>
          <Route
            path='/'
            element={
              <div className='flex h-screen flex-col items-center justify-center'>
                <div className='text-center'>
                  <h1 className='rounded-t bg-black p-1 font-bold text-white'>
                    🚧🚧 <span className='underline'>Work in progress</span>{' '}
                    🚧🚧
                  </h1>
                  <Link
                    to='/v1'
                    className='block rounded-b border border-black p-1'
                  >
                    {' -> '}
                    <span className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-[width] hover:after:w-full'>
                      Go to Version 1
                    </span>
                    {' <- '}
                  </Link>
                </div>
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
