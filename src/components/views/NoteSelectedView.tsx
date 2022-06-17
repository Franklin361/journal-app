import { useRef, useState } from 'react';
import { Button, Input } from '..';

export const NoteSelectedView = () => {
    const fileRef = useRef<HTMLInputElement>(null)

  const [images, setImages] = useState<File[]>([])

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (files?.length !== 0 && files) {

      if (files.length >= 5 || (images.length + files.length) >= 5) return alert('Only 4 images version free');
      
      let newImages: File[] = [];

      for (let i = 0; i < files.length; i++) {

        if (!files[i].type.includes('image')) return alert('Format No permit');

        const alreadyExistImg = images.find( img => img.name === files[i].name);
        if(alreadyExistImg) return alert('Image already exists');

        newImages.push(files[i]); 
      }

      setImages([...newImages,...images])
    }
  }

  const handleDeleteImage = (index:number) => {
    setImages( images => ([
      ...images.filter( (_, i) => i !== index)
    ]));
  }

  const handleUploadImage = () => {
    fileRef.current?.click();
  }
  return (
    <main className="px-5">
          <header className="flex justify-between items-center my-5 lg:flex-row lg:gap-0 flex-col gap-5">
            
            <h3 className="text-4xl font-bold">28 de agosto, 2023</h3>
            
            <div className="flex justify-between items-center sm:gap-20 gap-5 sm:flex-row flex-col">

              <input
                type="file"
                name="file"
                multiple
                ref={fileRef}
                className="hidden"
                onChange={handleChange}
              />

              <Button
                icon="upload"
                label="Add image"
                htmlFor="file"
                className="btn-ghost btn-outline sm:w-auto w-30 sm:flex-none"
                onClick={handleUploadImage}
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

            <div className={`carousel gap-10 carousel-center w-full p-4 mt-5 space-x-4 bg-neutral rounded-box ${images.length === 0 ? 'm-h-52':'h-52'}`}>
              {
                images.length !== 0
                  ? images.map((item, i) => (
                    <div className="carousel-item relative" key={item.name + item.lastModified}>
                      <img src={URL.createObjectURL(item)} className="rounded-box w-80 object-cover" />
                      <Button
                        secondary
                        icon="close"
                        className="absolute rounded-full -right-4 -top-2 w-auto"
                        onClick={()=> handleDeleteImage(i)}
                      />
                    </div>
                  ))
                  : <span className="block w-full text-center font-bold">No images 🤯</span>
              }
            </div>
          </section>
        </main>
  )
}