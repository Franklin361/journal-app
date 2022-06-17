import { Provider } from "react-redux"
import { AppRouter } from "./routes"
import { store } from "./redux"

const App = () => {

  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  )
}
export default App