import { Button } from './';
import { MyProfile } from './MyProfile';

export const HeaderNoteSelected = () => {
    return (
        <header className="h-46 flex justify-between items-center bg-neutral px-5 sm:flex-row sm:h-24 flex-col py-5 gap-5">

            <span><b>Notes</b> App</span>
            <MyProfile/>
            <Button
                icon="log-out"
                label="Log out"
                className="sm:flex-none btn-outline sm:w-auto w-30"
                secondary
            />
        </header>
    )
}