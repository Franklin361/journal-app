import { Button } from '..';
import { useAppDispatch } from '../../hooks';
import { onCloseModal } from '../../redux';

export const ModalImage = ({image}:{image:string}) => {

    const dispatch = useAppDispatch();

    const handleCloseModal = () => dispatch(onCloseModal());

    return (
        <div className='fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 image-max z-30 modal-view'>
            <img src={image} className='rounded border mx-auto w-full shadow-2xl shadow-neutral-focus' alt="aaa" />
            <Button icon='close' label='close' onClick={handleCloseModal}
                className='w-auto absolute -translate-y-2/4 top-2/4 -right-12 modal-view' secondary />
        </div>
    )
}