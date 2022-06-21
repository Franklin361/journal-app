import { Link } from "react-router-dom";
import { Button, Input, Spinner } from "../../components"
import { AuthLayout } from "../../layouts"
import { useAppDispatch, useAppSelector, useForm } from '../../hooks';
import { useMemo } from 'react';
import { isValidForm } from "../../utils";
import { startCreatingUserWithEmailPassword } from "../../redux";

interface FormState {
    email: string;
    password: string
    displayName: string
}

const initalState: FormState = {
    displayName: '',
    email: '',
    password: ''
}

const formValidations: { [key in keyof FormState]: [(value: any) => boolean, string] } = {
    email: [(value: string) => value.includes('@'), 'The email must have an @'],
    password: [(value: string) => value.length >= 6, 'The password must be longer than 6 letters.'],
    displayName: [(value: string) => value.length >= 1, 'Name is required'],
}

export const SignUpPage = () => {

    const { formState, onInputChange, onResetForm, email, displayName, password } = useForm<FormState>(initalState)

    const { status } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const isAuthenticated = useMemo(() => status === 'checking', [status])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isValidForm(formState, formValidations)) return;

        dispatch(startCreatingUserWithEmailPassword(formState))
        onResetForm();
    }

    return (
        <AuthLayout>
            <div className="card lg:mt-1 mt-24  w-full lg:w-3/4 border border-slate-700 shadow-2xl animate-fadein bg-base-300">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold"> Sigh up right now! </h2>
                    <form className="flex gap-0 flex-col" onSubmit={onSubmit}>
                        <Input
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            type="text" placeholder="example"
                            label="Name"
                            primary
                        />
                        <Input
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            type="email" placeholder="example@example"
                            label="Email"
                            primary
                        />
                        <Input
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            type="password" placeholder="*****"
                            label="Password"
                            primary
                        />
                        <div className="card-actions justify-around mt-5 items-center flex-col lg:flex-row">
                            <Button icon="log-in" label="Create" primary disabled={isAuthenticated} />
                        </div>
                        <div className="text-center mt-5">

                            {
                                !isAuthenticated
                                    ? <Link to="/auth/login" className="link text-lg">Login</Link>
                                    : <Spinner />
                            }
                        </div>
                    </form>
                </div>
            </div>
        </AuthLayout>
    )
}