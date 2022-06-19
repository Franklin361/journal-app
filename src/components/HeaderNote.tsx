import { useAppDispatch, useAppSelector } from "../hooks";
import { useRef, useMemo } from 'react';
import { startSaveNote, uploadImage } from "../redux";
import { Button } from './';

export const HeaderNote = () => {
    const dispatch = useAppDispatch();
    const { active, isSaving } = useAppSelector(state => state.note);

    const dateString = useMemo(() => {
        if (active && active?.date) {
            const newDate = new Date(+active.date);
            return newDate.toLocaleDateString('es-MX', { day:'2-digit', month: 'long', year:'numeric', hour: '2-digit', minute:'2-digit' });
        }
    }, [active])

    const onSaveNote = () =>  dispatch(startSaveNote());
    

    const fileRef = useRef<HTMLInputElement>(null);
    const onUploadImage = () => fileRef.current?.click();

    const onInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => e.target.files && dispatch(uploadImage(e.target.files));

    return (
        <header className="flex justify-between items-center my-5 lg:flex-row lg:gap-0 flex-col gap-5">

            <h3 className="text-4xl font-bold">{dateString && dateString}</h3>

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
                    type="button"
                    disabled={isSaving}
                />
                <Button
                    type="submit"
                    icon="save"
                    label="Save Note"
                    className="sm:flex-none sm:w-auto w-30"
                    primary
                    onClick={onSaveNote}
                    disabled={isSaving}
                />
            </div>
        </header>
    )
}