import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Home from './pages/Home';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/About',
          element: <About />,
        },
        {
          path: '/Portfolio',
          element: <Portfolio />,
        },
        {
          path: '/Contact',
          element: <Contact />,
        },
        {
          path: '/Resume',
          element: <Resume />,
        },
      ],
    },
  ]);





ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
