import { useAppDispatch, useAppSelector } from "../../hooks";
import { onCloseModal, setActiveNote, startSaveNote } from "../../redux";
import { Button } from '..';

export const ModalSaveChanges = () => {
    
    const { nextNote } = useAppSelector(state => state.note)
    const dispatch = useAppDispatch();

    const onClose = () => {
        dispatch(setActiveNote(nextNote!))
        dispatch(onCloseModal())
    }

    const onSaveNote = () => {
        dispatch(startSaveNote());
        dispatch(setActiveNote(nextNote!))
        dispatch(onCloseModal())
    }

    return (
        <div className='fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 lg:w-3/6 w-5/6 z-30 modal-view bg-neutral-focus text-white border border-gray-500 rounded flex flex-col p-8 gap-10 text-center'>
            <h2 className="text-4xl font-bold">Wait, you made changes to this note.... 🤚</h2>
            <span className="text-gray-300 text-lg">You are about to exit without saving changes, do you want to save your note?</span>
            <div className="flex gap-10 lg:flex-row flex-col">
                <Button icon='save' label='Save' onClick={onSaveNote} className='w-auto' primary />
                <Button icon='close' label="Don't save" onClick={onClose} className='w-auto btn-outline' secondary />
            </div>
        </div>
    )
}