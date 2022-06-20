import { Icon } from '../../assets';
import { useAppDispatch } from '../../hooks';
import { onCloseModal } from '../../redux';

export const ModalImage = ({ image }: { image: string }) => {

    const dispatch = useAppDispatch();

    const handleCloseModal = () => dispatch(onCloseModal());

    return (
        <>
            <div className='fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-30 modal-view max-w-3xl w-4/6'>
                <img src={image} className='rounded border mx-auto object-contain w-fill shadow-2xl shadow-neutral-focus' alt="aaa" />
            </div>
            <button
                className='rounded-full z-50 bg-red-500 fixed w-16 h-16 flex justify-center items-center top-5 right-8 hover:bg-red-600 active:bg-red-400 btn p-0 border-none   '
                onClick={handleCloseModal}>
                <Icon name='close' className='text-white text-3xl' />
            </button>
        </>
    )
}