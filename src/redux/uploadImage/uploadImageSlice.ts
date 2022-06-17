import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UploadImageState {
    images: File[];
}

const initialState: UploadImageState = {
    images: []
}

export const uploadImageSlice = createSlice({
    name: 'uploadImage',
    initialState,
    reducers: {
        deleteLocalImage: (state, action: PayloadAction<number>) => {
            state.images = state.images.filter((_, index) => index !== action.payload)
        },
        uploadImage: (state, action: PayloadAction<FileList>) => {
            const files = action.payload;
            const images = state.images;

            if (files?.length !== 0 && files) {

                if (files.length >= 5 || (images.length + files.length) >= 5) return alert('Only 4 images version free');

                let newImages: File[] = [];

                for (let i = 0; i < files.length; i++) {

                    if (!files[i].type.includes('image')) return alert('Format No permit');

                    const alreadyExistImg = images.find(img => img.name === files[i].name);
                    if (alreadyExistImg) return alert('Image already exists');

                    newImages.push(files[i]);
                }

                state.images = [...newImages, ...images]
            }
        }
    },
 })

export const { deleteLocalImage, uploadImage } = uploadImageSlice.actions

export default uploadImageSlice.reducer