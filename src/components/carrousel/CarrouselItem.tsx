import { Button } from '..';
import { useAppDispatch } from '../../hooks/';
import { deleteLocalImage, onOpenModal } from '../../redux';

interface Props {
    item: File;
    index: number;
}

export const CarrouselItem = ({ item, index }: Props) => {
    console.log('carr');
    const dispatch = useAppDispatch();

    const handleOpenModal = (file: File) => dispatch(onOpenModal({image:URL.createObjectURL(file)}));
    
    const onDeleteImage = () => dispatch(deleteLocalImage(index))

    return (
        <div className="carousel-item relative z-10 up-down-animation" >
            <img
                src={URL.createObjectURL(item)}
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