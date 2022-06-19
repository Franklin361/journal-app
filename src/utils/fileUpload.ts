import toast from 'react-hot-toast';

const cloud_name = import.meta.env.VITE_CLOUD_NAME as string;
const preset = import.meta.env.VITE_PRESET as string;

export const fileUpload = async( file: File ) => {
    
    if ( !file ) return null;

    const cloudUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`

    const formData = new FormData();
    formData.append('upload_preset',preset);
    formData.append('file', file );

    try {
 
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });


        if ( !resp.ok ) toast.error('Unable to upload image', { icon: '🚨' })
        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch (error) {
        // console.log(error);
        // throw new Error( error.message );
        return null;
    }

}