import { HeaderSideBar, LayoutItemNotes } from '..';
import { Icon } from '../../assets';
import { Button } from '../ui/Button';

const items = [1,2,3,4,5,6];

export const SideBar = ({ showHideSidebar, change }:{showHideSidebar: ()=>void, change:boolean}) => {
    
    
    return (
        <aside className={`shadow-2xl shadow-black h-screen bg-neutral max-w-sm flex fixed  left-0 top-0 z-20 ${!change ? 'hidde-nav' : 'show-nav'}`}>
            <div className='bg-neutral'>

                <HeaderSideBar />

                <hr className='border-gray-600' />

                <Button
                    icon='add-note'
                    label='Create one note'
                    primary
                    className='my-5 w-5/6 mx-auto'
                />
                
                <hr className='border-gray-600' />

                <LayoutItemNotes items={items}/>
            </div>
            <button
                 className={`bg-neutral absolute w-16 h-16 flex justify-center items-center shadow shadow-white/10 active:bg-zinc-900 top-2/4 -translate-y-2/4 transition-all ease-in ${change ? '-right-7' : '-right-16 '}`}
                onClick={showHideSidebar}
            >
                <Icon name='arrow-double' />
            </button>
        </aside>
    )
}