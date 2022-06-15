import { Button, Input } from "../../components"
import { AuthLayout } from "../../layouts"
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <AuthLayout>
      <div className="card mt-10 w-full lg:w-2/4 border border-slate-700 shadow-2xl animate-fadein bg-base-300">
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold"> Login right now! </h2>
          <form className="flex gap-5 flex-col">
            <Input
              type="email" placeholder="example@example"
              label="Email"
            />
            <Input
              type="password" placeholder="*****"
              label="Password"
            />
          </form>
          <div className="card-actions justify-around mt-5 items-center flex-col lg:flex-row">
            <Button icon="log-in" label="Log In" primary />
            <span className="flex-1 text-center font-bold text-lg">or</span>
            <Button icon="google" label="Google" />
          </div>
          <div className="text-center mt-5">
            <Link to="/auth/signup" className="link text-lg">Create account</Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}