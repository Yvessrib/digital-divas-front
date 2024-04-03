/* eslint-disable react/no-children-prop */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/login'
import { Layout } from './pages/appLayout'
import { AdminProjectsList } from './pages/admin/projectsList'
import { AdminProjectsSignIn } from './pages/admin/projectsSignIn'
import { AdminUsersList } from './pages/admin/usersList'
import { LoginLayout } from './pages/loginLayout'
import { LoginFirstAccess } from './pages/loginFirstAcess'

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginLayout children={<LoginPage />} />} />
        <Route
          path="/login/firstAcess"
          element={<LoginLayout children={<LoginFirstAccess />} />}
        />
        <Route
          path="admin/projectsList"
          element={<Layout children={<AdminProjectsList />} />}
        />
        <Route
          path="admin/projectsList/projectsSignIn"
          element={<Layout children={<AdminProjectsSignIn />} />}
        />
        <Route
          path="admin/usersList"
          element={<Layout children={<AdminUsersList />} />}
        />
      </Routes>
    </Router>
  )
}
