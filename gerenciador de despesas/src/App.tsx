import './global.css'
import { Toaster } from 'sonner';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/theme/theme-provider';

export function App() {
  
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme='dark'>
        <Helmet titleTemplate='%s | Crazy Cat Gang'/>
        <Toaster richColors/>
        <RouterProvider router={router} />
      </ThemeProvider>
      
    </HelmetProvider>
  )
}


