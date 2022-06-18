import { NotFoundElements } from '../';

const props = {
    title: 'No note selected yet!',
    subtitle: 'Select a note or make a note',
    src: 'https://assets10.lottiefiles.com/packages/lf20_jv0xz0qi.json'
}

export const NothigSelectedView = () => {
  return (
    <div className="w-full mx-auto h-96 mt-20">
        <NotFoundElements 
            {...props}
            titleClass='text-4xl lg:text-7xl text-4xl mb-5'
            imageClass=' lg:w-96 up-down-animation'
            subtitleClass='text-xl'
        />
    </div>
  )
}