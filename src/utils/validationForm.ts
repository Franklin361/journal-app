import toast from 'react-hot-toast';

export const isValidForm = <T>(formState: T, formValidations: { [key in keyof T]: [(value: any) => boolean, string] }) => {
    let errors = 0;
    
    for (const formField of Object.keys(formValidations)) {
        const [fn, errorMessage] = formValidations[formField as keyof T];
        const value = formState[formField as keyof T];
        
        if( !fn(value) ){
            toast.error(errorMessage, { position: 'top-right' });
            errors ++
        }
    }

    return (errors === 0)
}