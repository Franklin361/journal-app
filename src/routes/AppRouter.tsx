
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MyProfile } from "../components";
import { LoginPage, SignUpPage } from '../pages';




export const AppRouter = () => {

    return (
        <BrowserRouter>
        <MyProfile/>
            <Routes>
                <Route path="auth/login" element={<LoginPage/>}/>
                <Route path="auth/signup" element={<SignUpPage/>}/>

                <Route path='/*' element={<Navigate to='auth/login' replace />} />
            </Routes>
        </BrowserRouter>
    );
};