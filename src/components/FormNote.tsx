import { useEffect } from 'react';
import { Input } from './';
import { useAppSelector,useForm, useAppDispatch } from '../hooks';
import { HeaderNote } from '.';
import { Note } from '../interfaces';
import { setActiveNote } from '../redux';

export const FormNote = () => {

    const dispatch = useAppDispatch();
    const { active } = useAppSelector(state => state.note)
    const { formState, onInputChange, body, title } = useForm<Note>(active!)

    const onSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    useEffect(() => {
        dispatch( setActiveNote(formState) );
    }, [formState])

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