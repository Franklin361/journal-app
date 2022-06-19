import { memo } from 'react';

import { CarrouselItem } from "../";

interface Props {
    images: string[];
}
export const CarrouselLayout = memo(({ images }: Props) => {
    
    return (
        <div className={`carousel gap-10 carousel-end w-full p-4 px-8 mt-5 space-x-4 bg-neutral rounded-box ${images.length === 0 ? 'm-h-52' : 'h-52'}`}>
            {
                images.length !== 0
                    ? images.map((item, index) => (
                        <CarrouselItem  {...({ item, index })}
                            key={ typeof item === 'string' ? item : index }
                        />
                    ))
                    : <span className="block w-full text-center font-bold">No images 🤯</span>
            }
        </div>
    )
})