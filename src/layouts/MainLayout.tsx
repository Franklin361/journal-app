import { SideBar } from '../components';
import { ElementJSX } from '../interfaces';
import { useState } from 'react';

export const MainLayout = ({ children }: ElementJSX) => {
    // TODO: cambiar este estado a un estado global para no mandar propiedades al SideBar
    const [change, setChange] = useState(true)

    const showHideSidebar = () => setChange(!change);

    return (
        <div className={`h-screen transition-nav ${ change ?'p-menu-open' :'p-menu-close'}`}>
           <SideBar {...{showHideSidebar, change}} />
            {children}
        </div>
    )
}

