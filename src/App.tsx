/* eslint-disable react/no-children-prop */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from './pages/appLayout'
import { AdminProjectsList } from './pages/admin/projectsList'
import { AdminProjectsSignIn } from './pages/admin/projectsSignIn'
import { AdminUsersList } from './pages/admin/usersList'
import { LoginFirstAccess } from './pages/loginPages/loginFirstAcess'
import { LoginPage } from './pages/loginPages/login'
import { LoginPasswordRefactor } from './pages/loginPages/loginPasswordRefactor'
import { LoginPasswordCode } from './pages/loginPages/loginCode'
import { LoginPasswordChange } from './pages/loginPages/loginPasswordChange'
import { LoginLayout } from './pages/loginLayout'
import { AdminProjectsEdit } from './pages/admin/projectsEdit'
import { AdminStagesList } from './pages/admin/stageList'

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
          path="/login/passwordRefactor"
          element={<LoginLayout children={<LoginPasswordRefactor />} />}
        />
        <Route
          path="/login/passwordCode"
          element={<LoginLayout children={<LoginPasswordCode />} />}
        />
        <Route
          path="/login/passwordChange"
          element={<LoginLayout children={<LoginPasswordChange />} />}
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
        <Route
          path="admin/projectsList/projectEdit"
          element={<Layout children={<AdminProjectsEdit />} />}
        />
        <Route
          path="admin/stagesList"
          element={<Layout children={<AdminStagesList />} />}
        />
      </Routes>
    </Router>
  )
}
