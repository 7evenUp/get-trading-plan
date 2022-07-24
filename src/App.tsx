import './App.css'
import { Account, Navigation, Plan, Settings } from './components'
import {
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='plan' element={<Plan />} />
          <Route path='settings' element={<Settings />} />
          <Route path='account' element={<Account />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App;
