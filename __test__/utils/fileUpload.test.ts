import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/utils/fileUpload';
import { getEnvironments } from '../../src/utils/getEnvironments';
const { VITE_KEY, VITE_SECRET, VITE_CLOUD_NAME } = getEnvironments()

cloudinary.config({
    cloud_name: VITE_CLOUD_NAME as string,
    api_key: VITE_KEY as string,
    api_secret: VITE_SECRET as string,
    secure: true
});


describe.skip('📂 FileUpload.ts', () => {

    test('🗒️ should return one string', async () => {

        const imageUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        // delete image
        if (url) {
            const segments = url.split('/');
            const imageId = segments[segments.length - 1].replace('.jpg', '');

            await cloudinary.api.delete_resources(['journal/' + imageId], {
                resource_type: 'image'
            });
        }

    })

    test('🗒️ should return null', async () => {

        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file); //Empty File
        expect(url).toBe(null);

    });
})