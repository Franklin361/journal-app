import { HeaderSideBar, LayoutItemNotes } from '..';
import { Icon } from '../../assets';
import { Button } from '../ui/Button';

const items = [1,2,3,4,5,6];

export const SideBar = ({ showHideSidebar, change }:{showHideSidebar: ()=>void, change:boolean}) => {
    
    
    return (
        <aside className={`h-screen bg-neutral max-w-sm flex fixed left-0 top-0 z-50 ${!change ? 'hidde-nav' : 'show-nav'}`}>
            <div className=''>

                <HeaderSideBar />

                <hr className='border-gray-600' />

                <Button
                    icon='add-note'
                    label='Create one note'
                    primary
                    className='my-5 lg:w-5/6 mx-auto'
                />
                
                <hr className='border-gray-600' />

                <LayoutItemNotes items={items}/>
            </div>
            <button
                className='min-h-screen bg-neutral w-16 flex justify-center items-center shadow shadow-white/10  active:bg-zinc-900'
                onClick={showHideSidebar}
            >
                <Icon name='arrow-double' />
            </button>
        </aside>
    )
}