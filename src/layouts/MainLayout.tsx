import { SideBar } from '../components';
import { ElementJSX } from '../interfaces';

export const MainLayout = ({ children }: ElementJSX) => {
    return (
        <div className='flex gap-2 overflow-hidden h-screen'>
           <SideBar/>
            {children}
        </div>
    )
}

