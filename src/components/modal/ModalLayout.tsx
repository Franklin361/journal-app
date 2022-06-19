import { useAppDispatch, useAppSelector } from "../../hooks";
import { onCloseModal } from "../../redux";

import { TypeModal } from "../../interfaces";
import { ModalSaveChanges, ModalDelete, ModalImage } from '../';

export const ModalLayout = () => {
    const { image, isOpen, type: typeModal } = useAppSelector(state => state.modalImage)

    const dispatch = useAppDispatch();

    const handleCloseModal = () => dispatch(onCloseModal());

    const showModal = () => {
        const modals: { [key in TypeModal]: JSX.Element } = {
            'ask': <ModalSaveChanges />,
            'delete': <ModalDelete />,
            'image': <ModalImage image={image} />
        }

        return modals[typeModal];
    }

    return (
        <>
            {
                (isOpen) && <>
                    {
                        showModal()
                    }

                    <div className='w-screen h-screen bg-black opacity-70 fixed top-0 left-0 z-20'
                        onClick={typeModal === 'image' ? handleCloseModal : () => { }} />
                </>
            }
        </>
    )
}