import { Button } from '..';

interface Props {
    item: File;
    onOpenModal: (item: File) => void;
    onDeleteImage: (index: number) => void;
    index: number;
}

export const CarrouselItem = ({ item, onDeleteImage, onOpenModal, index }: Props) => {
    console.log('carr')
    return (
        <div className="carousel-item relative z-10 up-down-animation" >
            <img
                src={URL.createObjectURL(item)}
                onClick={() => onOpenModal(item)}
                className="rounded-box w-80 object-cover cursor-pointer transition-all ease-in hover:scale-105"
            />
            <Button
                secondary
                icon="close"
                className="absolute rounded-full -right-4 -top-2 w-auto"
                onClick={() => onDeleteImage(index)}
            />
        </div>
    )
}