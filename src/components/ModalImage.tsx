import { useAppDispatch, useAppSelector } from "../hooks";
import { onCloseModal } from "../redux";
import { Button } from './';

export const ModalImage = () => {
    const { image, isOpen } = useAppSelector(state => state.modalImage)
    const dispatch = useAppDispatch();

    const handleCloseModal = () => dispatch(onCloseModal());

    return (
        <>
            {
                (isOpen && image) && <>
                    <div className='fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-4/6 z-30 modal-view'>
                        <img src={image} className='rounded border shadow-2xl shadow-neutral-focus' alt="aaa" />
                        <Button icon='close' label='closes' onClick={handleCloseModal}
                            className='w-auto absolute -top-5 -right-5' secondary />
                    </div>
                    <div className='w-screen h-screen bg-black opacity-70 fixed top-0 left-0 z-20' onClick={handleCloseModal} />
                </>
            }
        </>
    )
}