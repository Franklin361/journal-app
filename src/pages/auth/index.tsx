import { AuthLayout } from "../../layouts"

export const LoginPage = () => {
  return (
    <AuthLayout>
      <div className="card bg-base-100 shadow-xl mt-16 w-full lg:w-2/4 border">
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold"> Ingresa ahora mismo </h2>
          <form className="flex gap-5 flex-col">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input type="text" placeholder="Type here" className="input input-primary input-bordered w-full text-lg" />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input type="text" placeholder="Type here" className="input input-primary input-bordered w-full text-lg" />
            </div>
          </form>
          <div className="card-actions justify-around mt-5 items-center flex-col lg:flex-row">
            <button className="btn btn-primary flex-1">Log In</button>
            <span className="flex-1 text-center">or</span>
            <button className="btn btn-ghost btn-outline flex-1">Google</button>
          </div>
          <div className="text-center mt-5">
            <a className="link text-lg">Create account</a>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}