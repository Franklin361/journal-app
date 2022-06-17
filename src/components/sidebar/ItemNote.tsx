import { Icon } from "../../assets"

export const ItemNote = () => {
    console.log('card')
    return (
        <div
            className='up-down-animation min-h-16 flex group justify-center items-center gap-7 px-4 py-3 cursor-pointer hover:bg-neutral-focus active:bg-neutral'
        >
            <Icon name='mark' className='text-5xl text-zinc-200' />
            <div className="div">
                <span className='font-bold text-lg text-zinc-300'>Diciembre</span>
                <p className='text-sm text-zinc-500 group-hover:text-white'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    )
}