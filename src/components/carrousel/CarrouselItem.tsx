
import { Icon } from '../../assets';
import { useAppDispatch } from '../../hooks/';
import {  onOpenModal, startDeletingImage } from '../../redux';

interface Props {
    item: string;
}

export const CarrouselItem = ({ item }: Props) => {
    
    const dispatch = useAppDispatch();

    const handleOpenModal = (image: string) => dispatch(onOpenModal({image}));
    
    const onDeleteImage = () => dispatch(startDeletingImage(item))

    return (
        <div className="carousel-item relative  up-down-animation" >
            <img
                src={item}
                onClick={() => handleOpenModal(item) }
                className="rounded-box w-80 object-cover cursor-pointer transition-all ease-in hover:scale-105"
            />
            
            <button 
            className='rounded-full bg-red-500 absolute w-12 h-12 flex justify-center items-center -top-3 -right-3 hover:bg-red-600 active:bg-red-400 btn p-0 border-none   '  
            onClick={onDeleteImage}>
                <Icon name='delete'  className='text-white text-2xl'/>
            </button>
        </div>
    )
}