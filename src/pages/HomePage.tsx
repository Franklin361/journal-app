import { HeaderNoteSelected, NoteSelectedView, NothigSelectedView } from "../components"
import { MainLayout } from "../layouts"

export const HomePage = () => {
  

  return (
    <MainLayout>
      <div className="w-full h-screen">
        <HeaderNoteSelected/>

        <NoteSelectedView/>

        {/* <NothigSelectedView/> */}

      </div>
    </MainLayout>
  )
}