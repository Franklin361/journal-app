import { useRef, useState, useCallback } from 'react';
export const useUploadImage = () => {
  

  const fileRef = useRef<HTMLInputElement>(null);
  
  const [images, setImages] = useState<File[]>([]);


  const onInputFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
    
        if (files?.length !== 0 && files) {
    
          if (files.length >= 5 || (images.length + files.length) >= 5) return alert('Only 4 images version free');
    
          let newImages: File[] = [];
    
          for (let i = 0; i < files.length; i++) {
    
            if (!files[i].type.includes('image')) return alert('Format No permit');
    
            const alreadyExistImg = images.find(img => img.name === files[i].name);
            if (alreadyExistImg) return alert('Image already exists');
    
            newImages.push(files[i]);
          }
    
          setImages([...newImages, ...images])
        }
      },[images]
  )

  const onDeleteImage = useCallback( 
    (index: number) => setImages(images => ([
        ...images.filter((_, i) => i !== index)
      ])),[]
  )

  const onUploadImage = () => fileRef.current?.click();

    return {
        fileRef, 
        images,
        onInputFileChange,
        onDeleteImage,
        onUploadImage
    }
}