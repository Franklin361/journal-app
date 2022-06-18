import { SideBar } from '../components';
import { ElementJSX } from '../interfaces';
import { useState } from 'react';

export const MainLayout = ({ children }: ElementJSX) => {
    // TODO: cambiar este estado a un estado global para no mandar propiedades al SideBar
    const [change, setChange] = useState(false)

    const showHideSidebar = () => setChange(!change);

    return (
        <div className={`h-screen transition-nav`}>
           <SideBar {...{showHideSidebar, change}} />
            {children}
        </div>
    )
}

