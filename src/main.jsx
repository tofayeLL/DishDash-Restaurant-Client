import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './providers/AuthProviders';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <div className='container mx-auto'>
          <RouterProvider router={router} />
        </div>
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>,
)
