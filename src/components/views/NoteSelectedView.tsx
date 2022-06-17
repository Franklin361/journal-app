import { useRef, useState, useCallback } from 'react';

import { Button, Input, CarrouselLayout } from '..';
import { useUploadImage } from '../../hooks';

export const NoteSelectedView = () => {
  
  const { fileRef, images, onDeleteImage ,onInputFileChange, onUploadImage } = useUploadImage()
  
  const [modal, setModal] = useState({
    isOpen: false,
    image: ''
  });
  
  const onOpenModal = useCallback( (item: File) => setModal({ image: URL.createObjectURL(item), isOpen: true }), [])

  const onCloseModal = useCallback(() => setModal({ image: '', isOpen: false }),[])

  return (
    <main className="px-5 w-5/6 mx-auto">
      <header className="flex justify-between items-center my-5 lg:flex-row lg:gap-0 flex-col gap-5">

        <h3 className="text-4xl font-bold">28 de agosto, 2023</h3>

        <div className="flex justify-between items-center sm:gap-20 gap-5 sm:flex-row flex-col">

          <input
            type="file"
            name="file"
            multiple
            ref={fileRef}
            className="hidden"
            onChange={onInputFileChange}
          />

          <Button
            icon="upload"
            label="Add image"
            htmlFor="file"
            className="btn-ghost btn-outline sm:w-auto w-30 sm:flex-none"
            onClick={onUploadImage}
          />
          <Button
            icon="save"
            label="Save Note"
            className="sm:flex-none sm:w-auto w-30"
            primary
          />
        </div>
      </header>

      <section className="sm:overflow-y-scroll h-full hidden-scroll pb-5">
        <form className="flex flex-col gap-5">
          <Input
            label="Title"
            type="text"
            placeholder="What's the title?"
          />
          <textarea
            className="textarea lg:h-24 h-56 textarea-bordered w-full resize-none text-lg" placeholder="What's happening?"
          ></textarea>

        </form>

        <CarrouselLayout images={images} onDeleteImage={onDeleteImage} onOpenModal={onOpenModal}/>
        
      </section>


      {
        modal.isOpen && <>
          <div className='fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-4/6 z-30 modal-view'>
            <img src={modal.image} className='rounded border shadow-2xl shadow-neutral-focus' alt="aaa" />
            <Button icon='close' label='closes' onClick={onCloseModal} 
            className='w-auto absolute -top-5 -right-5' secondary />
          </div>
          <div className='w-screen h-screen bg-black opacity-70 fixed top-0 left-0 z-20' onClick={onCloseModal} />
        </>
      }

    </main >
  )
}