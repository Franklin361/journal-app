import { useAppDispatch } from "../hooks";
import { useRef } from 'react';
import { uploadImage } from "../redux";
import { Button } from './';

export const HeaderNote = () => {
    const dispatch = useAppDispatch();

  const fileRef = useRef<HTMLInputElement>(null);
  const onUploadImage = () => fileRef.current?.click();

  const onInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => e.target.files && dispatch(uploadImage(e.target.files));

    return (
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
    )
}