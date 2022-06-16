import { Player } from '@lottiefiles/react-lottie-player';

export const NoNotes = () => {
    return (
        <div className='h-full relative'>
            <div className="h-full flex justify-center items-center text-center flex-col absolute -translate-x-2/4 left-2/4 w-full">
                <span className="w-full font-bold text-xl">No Notes</span>
                <span className="w-full">Create one note, right now!</span>
                <Player
                    autoplay
                    loop
                    src="https://assets6.lottiefiles.com/packages/lf20_pcfclxy8.json"
                    className='w-5/6 '
                />
            </div>  
        </div>
    )
}