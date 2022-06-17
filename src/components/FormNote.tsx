import { Input } from './';

export const FormNote = () => {
    return (
        <form className="flex flex-col gap-5">
            <Input
                label="Title"
                type="text"
                placeholder="What's the title?"
            />
            <textarea
                className="textarea lg:h-24 h-56 textarea-bordered w-full resize-none text-lg" placeholder="What's happening?"
            ></textarea>

        </form>
    )
}