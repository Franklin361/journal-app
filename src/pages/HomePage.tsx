import { HeaderNoteSelected, NoteSelectedView, NothigSelectedView } from "../components"
import { MainLayout } from "../layouts"

export const HomePage = () => {
  

  return (
    <MainLayout>
      <div className="w-11/12 m-auto h-screen">
        <HeaderNoteSelected/>

        {/* <NoteSelectedView/> */}

        <NothigSelectedView/>

      </div>
    </MainLayout>
  )
}