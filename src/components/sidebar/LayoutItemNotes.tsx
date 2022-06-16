import { memo } from 'react';
import { ItemNote, NoNotes } from '..';

interface LayoutProps {
    items: number[]
}

export const LayoutItemNotes = memo(({ items }:LayoutProps) => {
    return (
        <div className='overflow-y-scroll h-4/6 hidden-scroll'>
            {
                !(items.length === 0 )
                ? <NoNotes/>
                : items.map( item => (
                    <ItemNote key={item}/>
                ))
            }
        </div>
    )
})