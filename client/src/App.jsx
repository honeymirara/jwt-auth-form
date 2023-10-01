
import RoutesProvider from './RoutesProvider/RoutesProvider';
import MyContext from './Context/Context';
import useAuth from '../src/hook/useAuth'

function App() {

  const auth = useAuth
  const routes = RoutesProvider(auth.token)
  return (
    <>
      <MyContext.Provider value={auth}>
        {routes}
      </MyContext.Provider>
    </>


  )
}

export default App
