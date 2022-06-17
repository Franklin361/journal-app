
interface InputProps {
    label: string;
    type: 'password' | 'text' | 'email';
    placeholder?: string;
    primary?: boolean;
    onChange?: () => void;
    value?: any;
    [x: string]: any;
}

export const Input = ({ label, primary, ...rest }: InputProps) => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text text-lg">{label}</span>
            </label>
            <input {...rest} className={`input ${primary ?'input-primary': ''} input-bordered w-full text-lg`} />
        </div>
    )
}