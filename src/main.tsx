import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './pages/login/index.tsx'
import { AdminProjectsList } from './pages/admin/projectsList/index.tsx'
import { AdminProjectsSignIn } from './pages/admin/projectsSignIn/index.tsx'
import { AdminUsersList } from './pages/admin/usersList/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: 'admin/projectsList',
    element: <AdminProjectsList />,
  },
  {
    path: 'admin/projectsList/projectsSignIn',
    element: <AdminProjectsSignIn />,
  },
  {
    path: 'admin/usersList',
    element: <AdminUsersList />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
