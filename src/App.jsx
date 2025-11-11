
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddStudents from './pages/AddStudents'



function App() {


  return (
    <>
     <Routes>
      <Route path='/'element={<AddStudents/>}/>
     </Routes>
   
    
    </>
  )
}

export default App
