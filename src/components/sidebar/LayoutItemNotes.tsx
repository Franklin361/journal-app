import { memo } from 'react';
import { ItemNote, NotFoundElements } from '..';

interface LayoutProps {
    items: number[]
}

const props = {
    title: 'No Notes',
    subtitle: 'Create one note, right now!',
    src: 'https://assets6.lottiefiles.com/packages/lf20_pcfclxy8.json'
}

export const LayoutItemNotes = memo(({ items }: LayoutProps) => {
    return (
        <div className='overflow-y-scroll h-4/6 hidden-scroll'>
            {
                !(items.length === 0)
                    ? <NotFoundElements {...props}/>
                    : items.map(item => (
                        <ItemNote key={item} />
                    ))
            }
        </div>
    )
})