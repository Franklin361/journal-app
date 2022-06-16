import { HeaderSideBar, ItemNote } from '..';

export const AsideBar = () => {
    return (
        <aside className='bg-black min-h-screen max-w-xs'>

            <HeaderSideBar />

            <hr className='border-gray-600' />

            <div className='overflow-y-scroll h-5/6'>
                <ItemNote />
                <ItemNote />
                <ItemNote />
                <ItemNote />
                <ItemNote />
            </div>

        </aside>
    )
}