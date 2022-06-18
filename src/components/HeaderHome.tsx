import { Button } from '.';
import { MyProfile } from './MyProfile';
import { useAppDispatch } from '../hooks/useStore';
import {  startLogout } from '../redux';

export const HeaderHome = () => {

    const dispatch = useAppDispatch()
    const handleLogOut = () => dispatch(startLogout())

    return (
        <header className="h-46 flex justify-between items-center bg-neutral px-5 sm:flex-row sm:h-24 flex-col py-5 gap-5">

            <span><b>Notes</b> App</span>
            <MyProfile/>
            <Button
                icon="log-out"
                label="Log out"
                className="sm:flex-none btn-outline sm:w-auto w-30"
                secondary
                onClick={handleLogOut}
            />
        </header>
    )
}