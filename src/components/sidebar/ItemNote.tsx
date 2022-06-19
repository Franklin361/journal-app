import { Icon } from "../../assets"
import { Note } from "../../interfaces"
import { useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useStore';
import { openSideBar, startAskSaveNote } from "../../redux";

export const ItemNote = (note: Note) => {
    const { body, id, title } = note

    const { active, isSaving } = useAppSelector(state => state.note)
    const dispatch = useAppDispatch()
    // console.log('item-note-')
    const isAcive = useMemo( ()=> active?.id === id, [active]) 
    
    const newTitle = useMemo( () => {
        if(title){
            return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
        }
    },[ title ])
    
    const newBody = useMemo( () => {
        if(body){
            return body.length > 34
            ? body.substring(0,34) + '...'
            : body;
        }
    },[ body ]);

    const onActiveNote = () => {
        
        dispatch(startAskSaveNote(note))
        dispatch(openSideBar(false))
        
    }

    return (
        <div
            className={`up-down-animation min-h-16 flex group justify-center items-center gap-7 px-4 py-3 ${(isSaving ? 'pointer-events-none' : isAcive ? 'pointer-events-none bg-neutral-focus' : 'cursor-pointer hover:bg-neutral-focus active:bg-neutral')}`}
            onClick={onActiveNote}
        >
            <Icon name={isAcive ? 'mark-fill' : 'mark'} className={`text-3xl ${isAcive ? 'text-primary': 'text-zinc-200'}`} />

            <div className="flex flex-col flex-1 h-16 justify-center">
                <span className='font-bold text-lg text-zinc-300'>{ 
                newTitle ? newTitle: 'No title yet!' 
                }</span>
                <p className='text-sm text-zinc-500 group-hover:text-white'>
                    {
                        newBody
                            ? newBody
                            : 'This note do not have content yet!, please write it'
                    }
                </p>
            </div>
        </div>
    )
}