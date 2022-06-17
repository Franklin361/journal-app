import { Bloob, Footer, MyProfile } from "../components"

import { ElementJSX } from "../interfaces"


export const AuthLayout = ({ children }: ElementJSX) => {
  return (
    <div className="w-3/4 mx-auto relative min-h-screen overflow-hidden flex justify-center items-start pb-36 lg:p-0">
      <MyProfile/>
      <Bloob />
      {children}
      <Footer />
    </div>
  )
}