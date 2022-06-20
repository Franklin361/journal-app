import toast from 'react-hot-toast';
import { getEnvironments } from './getEnvironments';



export const fileUpload = async( file: File ): Promise<string|null> => {

    const { VITE_CLOUD_NAME, VITE_PRESET} = getEnvironments();
    
    const cloud_name = VITE_CLOUD_NAME as string;
    const preset = VITE_PRESET as string;

    
    
    
    try {
        if ( !file ) return null;
        
        const cloudUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`
        
        const formData = new FormData();
        formData.append('upload_preset',preset);
        formData.append('file', file );
 
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });


        if ( !resp.ok ) {
            toast.error('Unable to upload image', { icon: '🚨' })
            return null;
        }
        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
        // throw new Error( error.message );
        return null;
    }

}