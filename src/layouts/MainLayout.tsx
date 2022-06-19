import { SideBar } from '../components';
import { ElementJSX } from '../interfaces';

export const MainLayout = ({ children }: ElementJSX) => {

    return (
        <div className={`h-screen transition-nav`}>
           <SideBar />
            {children}
        </div>
    )
}

