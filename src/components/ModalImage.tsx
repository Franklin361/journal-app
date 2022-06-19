import { useAppDispatch, useAppSelector } from "../hooks";
import { askSaveNote, onCloseModal } from "../redux";
import { Button } from './';
import { startSaveNote } from '../redux/note/thunk';

export const ModalImage = () => {
    const { image, isOpen, type } = useAppSelector(state => state.modalImage)
    const dispatch = useAppDispatch();

    const handleCloseModal = () => dispatch(onCloseModal());

    const onSaveNote = () => {
        dispatch(startSaveNote());
        handleCloseModal()
    }
    const handleCloseModalWithOutSave = () => {
        dispatch(askSaveNote(false))
        handleCloseModal();
    }

    return (
        <>
            {
                (isOpen) && <>
                    {
                        type === 'image'
                            ? (image) && <div className='fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-4/6 z-30 modal-view'>
                                <img src={image} className='rounded border shadow-2xl shadow-neutral-focus' alt="aaa" />
                                <Button icon='close' label='close' onClick={handleCloseModal}
                                    className='w-auto absolute -top-5 -right-5' secondary />
                            </div>
                            : <div className='fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 lg:w-3/6 w-5/6 z-30 modal-view bg-neutral-focus text-white border border-gray-500 rounded flex flex-col p-8 gap-10 text-center'>
                                <h2 className="text-4xl font-bold">Wait, you made changes to this note.... 🤚</h2>
                                <span className="text-gray-300 text-lg">You are about to exit without saving changes, do you want to save your note?</span>
                                <div className="flex gap-10 lg:flex-row flex-col">
                                    <Button icon='save' label='Save' onClick={onSaveNote} className='w-auto' primary />
                                    <Button icon='close' label="Don't save" onClick={handleCloseModalWithOutSave} className='w-auto btn-outline' secondary />
                                </div>
                            </div>
                    }

                    <div className='w-screen h-screen bg-black opacity-70 fixed top-0 left-0 z-20' onClick={ type === 'image' ? handleCloseModal : ()=>{}} />
                </>
            }
        </>
    )
}