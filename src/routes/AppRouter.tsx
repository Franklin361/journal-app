
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Spinner } from '../components';
import { useCheckAuth } from "../hooks";
import { PrivateRoutes, PublicRoutes } from './'

export const AppRouter = () => {

    const status = useCheckAuth()

    if (status === 'checking') return <div className="h-screen w-screen flex justify-center items-center"> <Spinner /> </div>

    return (
        <BrowserRouter>

            <Routes>
                
                {
                    (status === 'authenticated')
                        ? <Route path="/*" element={<PrivateRoutes/>}/>
                        : <Route path="auth/*" element={<PublicRoutes />} />
                }

                <Route path='/*' element={<Navigate to='/auth/login' replace />} />
            </Routes>
        </BrowserRouter>
    );
};