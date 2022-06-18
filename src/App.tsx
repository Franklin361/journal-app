import { Provider } from "react-redux"
import { Toaster } from "react-hot-toast"
import { AppRouter } from "./routes"
import { store } from "./redux"

const App = () => {

  return (
    <Provider store={store}>
      <AppRouter/>
      <Toaster />
    </Provider>
  )
}
export default App