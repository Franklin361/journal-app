import { HeaderHome, NoteSelectedView, NothigSelectedView } from "../components"
import { useAppSelector } from "../hooks"
import { MainLayout } from "../layouts"

export const HomePage = () => {

  const { active } = useAppSelector(state => state.note)

  return (
    <MainLayout>
      <div className="w-full h-screen">
        <HeaderHome/>
        {
          !!active
          ? <NoteSelectedView/>
          : <NothigSelectedView/>
        }

      </div>
    </MainLayout>
  )
}