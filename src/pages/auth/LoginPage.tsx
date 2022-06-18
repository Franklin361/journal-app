import { Button, Input, Spinner } from "../../components"
import { AuthLayout } from "../../layouts"
import { Link } from 'react-router-dom';
import { useForm } from "../../hooks";
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { useMemo } from "react";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../redux";
import { isValidForm } from "../../utils";


interface FormState {
  email: string;
  password: string
}

const initalState: FormState = {
  email:'correo@correo.com',
  password: '1234567'
}

const formValidations: { [key in keyof FormState]: [(value: any) => boolean, string] } = {
  email: [(value: string) => value.length >= 1, 'Email is required.'],
  password: [(value: string) => value.length >= 1, 'Password is required.']
}


export const LoginPage = () => {
  const { status } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const { formState,email, password, onInputChange, onResetForm } = useForm<FormState>(initalState)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!isValidForm(formState, formValidations)) return null;

    dispatch(startLoginWithEmailPassword(formState))
    onResetForm();
  }

  const onGoogleLogin = () => dispatch(startGoogleSignIn())

  const isAuthenticated = useMemo(() => status === 'checking', [status])
  

  return (
    <AuthLayout>
      <div className="card lg:mt-10 mt-24 w-full lg:w-3/4 border border-slate-700 shadow-2xl animate-fadein bg-base-300">
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold"> Login right now! </h2>
          <form className="flex gap-0 flex-col" onSubmit={onSubmit}>
            <Input
              type="email" placeholder="example@example"
              label="Email"
              primary
              name="email"
              value={email}
              onChange={onInputChange}
              disabled={isAuthenticated}
            />
            <Input
              type="password" placeholder="*****"
              label="Password"
              primary
              name="password"
              value={password}
              onChange={onInputChange}
              disabled={isAuthenticated}
            />

            <div className="card-actions justify-around mt-5 items-center flex-col lg:flex-row">
              <Button icon="log-in" label="Log In" primary type="submit" disabled={isAuthenticated} />
              <span className="flex-1 text-center font-bold text-lg">or</span>
              <Button icon="google" label="Google" type="button" onClick={onGoogleLogin} disabled={isAuthenticated}/>
            </div>
            <div className="text-center mt-5">
              {
                !isAuthenticated 
                ? <Link to="/auth/signup" className="link text-lg">Create account</Link>
                : <Spinner/>
              }
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}