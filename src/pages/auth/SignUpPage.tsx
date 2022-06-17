import { Link } from "react-router-dom";
import { Button, Input } from "../../components"
import { AuthLayout } from "../../layouts"

export const SignUpPage = () => {

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <AuthLayout>
            <div className="card lg:mt-1 mt-24  w-full lg:w-2/4 border border-slate-700 shadow-2xl animate-fadein bg-base-300">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold"> Sigh up right now! </h2>
                    <form className="flex gap-0 flex-col" onSubmit={handleSubmit}>
                        <Input
                            type="text" placeholder="example"
                            label="Name"
                            primary
                        />
                        <Input
                            type="email" placeholder="example@example"
                            label="Email"
                            primary
                        />
                        <Input
                            type="password" placeholder="*****"
                            label="Password"
                            primary
                        />
                    <div className="card-actions justify-around mt-5 items-center flex-col lg:flex-row">
                        <Button icon="log-in" label="Create" primary />
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