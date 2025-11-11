
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Addstudent from './pages/Addstudent'


function App() {


  return (
    <>
     <Routes>
      <Route path='/'element={<Addstudent/>}/>
     </Routes>
   
    
    </>
  )
}

export default App
