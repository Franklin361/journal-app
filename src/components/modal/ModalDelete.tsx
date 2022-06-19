import { useAppDispatch } from "../../hooks";
import { onCloseModal, startDeletingNote } from "../../redux";
import { Button } from '..';

export const ModalDelete = () => {
    const dispatch = useAppDispatch();

    const handleCloseModal = () => dispatch(onCloseModal());

    const onDeleteNote = () => {
        dispatch(startDeletingNote());
        dispatch(onCloseModal());
    }

    return (
        <div className='fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 lg:w-3/6 w-5/6 z-30 modal-view bg-neutral-focus text-white border border-gray-500 rounded flex flex-col p-8 gap-10 text-center'>
            <h2 className="text-4xl font-bold">Are you sure about this?.... 🤚</h2>
            <span className="text-gray-300 text-lg">This note will be permanently deleted, do you want to delete it?</span>
            <div className="flex gap-10 lg:flex-row flex-col">
                <Button icon='delete' label='Delete' onClick={onDeleteNote} className='w-auto' secondary />
                <Button icon='close' label="Don't delete" onClick={handleCloseModal} className='w-auto btn-outline ' />
            </div>
        </div>
    )
}