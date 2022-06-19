import { HeaderSideBar, LayoutItemNotes } from '..';
import { Icon } from '../../assets';
import { Button } from '../ui/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { openSideBar, startNewNote } from '../../redux';

export const SideBar = () => {

    const dispatch = useAppDispatch();
    const { isSaving, notes } = useAppSelector(state => state.note)
    const { isOpen } = useAppSelector(state => state.sidebar)

    const onCreateNote = () => {
        dispatch(startNewNote());
        if (notes.length !== 4) {
            setTimeout(() => {
                dispatch(openSideBar(false))
            }, 2000);
        }
    }
    const onShowHideSidebar = () => dispatch(openSideBar(!isOpen))

    return (
        <aside className={`shadow-2xl w-96 shadow-black h-screen bg-neutral max-w-sm flex fixed  left-0 top-0 z-20 ${!isOpen ? 'hidde-nav' : 'show-nav'}`}>
            <div className='bg-neutral w-full'>

                <HeaderSideBar />

                <hr className='border-gray-600' />

                <Button
                    icon='add-note'
                    label='Create one note'
                    primary
                    className='my-5 w-5/6 mx-auto'
                    onClick={onCreateNote}
                    disabled={isSaving}
                />

                <hr className='border-gray-600' />

                <LayoutItemNotes items={notes} />
            </div>
            <button
                className={`bg-neutral absolute w-16 h-16 flex justify-center items-center shadow shadow-white/10 active:bg-zinc-900 top-2/4 -translate-y-2/4 transition-all ease-in ${isOpen ? '-right-7' : '-right-16 '}`}
                onClick={onShowHideSidebar}
            >
                <Icon name='arrow-double' />
            </button>
        </aside>
    )
}