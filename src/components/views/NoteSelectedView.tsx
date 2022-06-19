import { FormNote, CarrouselLayout, ModalLayout } from '..';
import { useAppSelector,useAppDispatch } from '../../hooks';
import { Button } from '../';
import { openModalDelete } from '../../redux';

export const NoteSelectedView = () => {

  const { active } = useAppSelector(state => state.note);
  const dispatch = useAppDispatch();
  const handleDeleteNote = () => dispatch(openModalDelete()) 

  return (
    <main className="px-5 w-5/6 mx-auto">


      <section className="sm:overflow-y-scroll h-full hidden-scroll pb-5">

        <FormNote />

        <CarrouselLayout images={ active && active.imageUrls ? active!.imageUrls : []} />

        <Button 
          onClick={handleDeleteNote} 
          label="delete note" 
          className='bg-red-500 text-white mx-auto lg:w-2/6 mt-10 hover:hover:bg-red-600 active:hover:bg-red-500'  
          icon='delete' />

      </section>

      <ModalLayout />

    </main >
  )
}