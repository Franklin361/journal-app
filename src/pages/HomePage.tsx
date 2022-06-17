import { HeaderHome, NoteSelectedView, NothigSelectedView } from "../components"
import { MainLayout } from "../layouts"

export const HomePage = () => {
  

  return (
    <MainLayout>
      <div className="w-full h-screen">
        <HeaderHome/>

        <NoteSelectedView/>

        {/* <NothigSelectedView/> */}

      </div>
    </MainLayout>
  )
}