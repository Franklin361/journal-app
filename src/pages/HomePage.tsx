import { Icon } from "../assets"
import { Button, Input } from "../components"
import { MainLayout } from "../layouts"
import { useChangeTheme } from '../hooks';
import { useRef, useState } from 'react';

export const HomePage = () => {

  // const { handleChangeTheme } = useChangeTheme();
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
    <MainLayout>
      <div className="w-11/12 m-auto min-h-screen">
        <header className="h-32 flex justify-between items-center bg-slate-900 px-5 lg:flex-row lg:h-24 flex-col py-5">

          <span><b>Notes</b> App</span>
          {/* <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleChangeTheme}/>
            <Icon name="moon" className="swap-off fill-current w-10 h-10" />
            <Icon name="sun" className="swap-on fill-current w-10 h-10" />
          </label> */}
          <Button
            icon="log-out"
            label="Log out"
            className="flex-none btn-outline lg:w-30"
            secondary
          />
        </header>

        <main className="px-5">
          <header className="flex justify-between items-center my-5 lg:flex-row lg:gap-0 flex-col gap-5">
            
            <h3 className="text-4xl">28 de agosto, 2023</h3>
            
            <div className="flex justify-between items-center lg:gap-20 gap-5 lg:flex-row flex-col">

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
                className=" btn-ghost btn-outline flex-none"
                onClick={handleUploadImage}
              />
              <Button
                icon="save"
                label="Save Note"
                className="lg:flex-none lg:w-30"
                primary
              />
            </div>
          </header>

          <section className="overflow-y-scroll h-96 hidden-scroll pb-5">
            <form className="flex flex-col gap-5">
              <Input
                label="Title"
                type="text"
                placeholder="What's the title?"
              />
              <textarea
                className="textarea h-44 textarea-bordered w-full resize-none text-lg" placeholder="What's happening?"
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
                        className="absolute rounded-full -right-4 -top-2"
                        onClick={()=> handleDeleteImage(i)}
                      />
                    </div>
                  ))
                  : <span className="block w-full text-center font-bold">No images 🤯</span>
              }
            </div>
          </section>
        </main>

      </div>
    </MainLayout>
  )
}