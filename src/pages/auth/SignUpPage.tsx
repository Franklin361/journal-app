import { Link } from "react-router-dom";
import { Button, Input } from "../../components"
import { AuthLayout } from "../../layouts"

export const SignUpPage = () => {

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <AuthLayout>
            <div className="card bg-base-100 mt-5 w-full lg:w-2/4 border border-slate-700 shadow-2xl animate-fadein">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold"> Sigh up right now! </h2>
                    <form className="flex gap-5 flex-col" onSubmit={handleSubmit}>
                        <Input
                            type="email" placeholder="example@example"
                            label="Email"
                        />
                        <Input
                            type="password" placeholder="*****"
                            label="Password"
                        />
                    
                    <div className="card-actions justify-around mt-5 items-center flex-col lg:flex-row">
                        <Button icon="log-in" label="Create" primary />
                        <span className="flex-1 text-center font-bold text-lg">or</span>
                        <Button icon="google" label="Google" />
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/auth/login" className="link text-lg">Login</Link>
                    </div>
                    </form>
                </div>
            </div>
        </AuthLayout>
    )
}