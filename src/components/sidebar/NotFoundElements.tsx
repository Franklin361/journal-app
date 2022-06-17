import { Player } from '@lottiefiles/react-lottie-player';

interface Props {
    title:string;
    subtitle?:string;
    src: string;
    titleClass?: string;
    imageClass?:string;
    subtitleClass?:string;
}

export const NotFoundElements = ({  src, title, subtitle, imageClass, titleClass, subtitleClass }: Props) => {
    return (
        <div className='h-full relative'>
            <div className="h-full flex justify-center items-center text-center flex-col absolute -translate-x-2/4 left-2/4 w-full">
                
                <span className={`w-full font-bold text-xl ${titleClass}`}>{title}</span>

                { subtitle && <span className={`w-full ${subtitleClass}`}>{subtitle}</span> }

                <Player
                    autoplay
                    loop
                    src={src}
                    className={`w-5/6 ${imageClass}`}
                />
            </div>  
        </div>
    )
}