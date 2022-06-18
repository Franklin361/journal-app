import { Input } from './';
import { useAppSelector,useForm } from '../hooks';
import { HeaderNote } from '.';
import { useMemo } from 'react';
import { Note } from '../interfaces';

export const FormNote = () => {

    const { active } = useAppSelector(state => state.note)
    const { formState, onInputChange, body, title } = useForm<Note>(active!)

    const onSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <form className="flex flex-col gap-5" onSubmit={onSumbit}>
            <HeaderNote />
            <Input
                label="Title"
                type="text"
                placeholder="What's the title?"
                name="title"
                value={title}
                onChange={onInputChange}
            />
            <textarea
                className="textarea text-white lg:h-24 h-56 textarea-bordered w-full resize-none text-lg" placeholder="What's happening?"
                name="body"
                value={body}
                onChange={onInputChange}
            ></textarea>

        </form>
    )
}