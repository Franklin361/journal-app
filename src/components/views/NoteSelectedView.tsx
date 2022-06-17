import { FormNote, CarrouselLayout, ModalImage, HeaderNote } from '..';
import { useAppSelector } from '../../hooks';

export const NoteSelectedView = () => {

  const { images } = useAppSelector(state => state.uploadImage);

  return (
    <main className="px-5 w-5/6 mx-auto">

      <HeaderNote />

      <section className="sm:overflow-y-scroll h-full hidden-scroll pb-5">
        
        <FormNote />
        
        <CarrouselLayout images={images} />

      </section>

      <ModalImage />

    </main >
  )
}