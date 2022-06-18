import { useState, useEffect } from 'react';

export const useForm = <T>( initialForm: T ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    useEffect(() => {
        console.log('a')
        setFormState( initialForm );
    }, [ initialForm ])

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => setFormState( initialForm );

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}