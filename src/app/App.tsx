import { RouterProvider } from 'react-router-dom';

import { StoreProvider } from './providers';

import AppRouter from './router/AppRouter';

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={AppRouter} />
    </StoreProvider>
  );
}

export default App;
