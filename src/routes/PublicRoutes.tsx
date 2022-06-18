import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, SignUpPage } from '../pages';


export const PublicRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="signup" element={ <SignUpPage /> } />

        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
