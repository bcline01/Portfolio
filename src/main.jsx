import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: '/About',
          element: <Contact />,
        },
        {
          path: '/Blog',
          element: <Portfolio />,
        },
        {
          path: '/Contact',
          element: <Resume />,
        },
      ],
    },
  ]);





ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
