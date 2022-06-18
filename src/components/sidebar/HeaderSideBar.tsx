import { useAppSelector } from "../../hooks"

export const HeaderSideBar = () => {
    
    const { displayName,photoURL } = useAppSelector(state => state.auth)
    
    
    return (
        <header className='flex justify-between items-center h-24 gap-5 px-5 '>
            <div className="avatar">
                <div className="rounded-full w-14 up-down-animation">
                    {
                        photoURL 
                        ? <img src={photoURL} />
                        : <div className="w-full h-full bg-primary flex justify-center items-center">
                            <span className="text-neutral-content text-2xl font-bold">{ displayName![0] }</span>
                            </div>
                    }
                </div>
            </div>
            <h2 className='text-left flex-1 flex justify-start items-center font-bold text-l'>{ displayName }</h2>
        </header>
    )
}