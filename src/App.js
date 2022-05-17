import './App.css'
import { useMyContext } from './context'
import Sidebar from './Sidebar'
import ResumeBody from './ResumeBody'

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <ResumeBody />
    </div>
  )
}

export default App
