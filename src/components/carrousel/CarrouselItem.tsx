import { Button } from '..';
import { useAppDispatch } from '../../hooks/';
import {  onOpenModal, startDeletingImage } from '../../redux';

interface Props {
    item: string;
    index: number;
}

export const CarrouselItem = ({ item, index }: Props) => {
    
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
            
            <Button
                secondary
                icon="close"
                className="absolute rounded-full -right-4 -top-2 w-auto"
                onClick={onDeleteImage}
            />
        </div>
    )
}