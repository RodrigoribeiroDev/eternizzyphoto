import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import LandingPage from './pages/landingPage.jsx';
import Contact from './pages/Contact.jsx';
import Gallery from './pages/Gallery.jsx';
import TrabalheConosco from './pages/TrabalheConosco.jsx';
import Policy from './pages/Policy.jsx';
import TermsOfUse from './pages/TermsOfUse.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <LandingPage /> },
      { path: 'contact', element: <Contact />},
      { path: 'gallery', element: <Gallery />},
      { path: 'trabalheconosco', element: <TrabalheConosco />},
      { path: 'policy', element: <Policy />},
      { path: 'terms', element: <TermsOfUse />},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
