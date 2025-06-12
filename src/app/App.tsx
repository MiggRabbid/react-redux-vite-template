import { Box } from '@mui/material';

import { StoreProvider } from './providers';

function App() {
  return (
    <StoreProvider>
      <Box className="text-center text-3xl font-bold">
        <h1>TS + React + RTK + MUI + Tailwind + Vite</h1>
      </Box>
    </StoreProvider>
  );
}

export default App;
