
import './App.css';
import './Components/Navbar.js';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar.js';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mentors from './routes/Mentors';
import Addstudents from './routes/Addstudents';
import Assigned_students from './routes/Assigned_students';
import Students from './routes/Students';
import Add_New_students from './routes/Add_New_students';
import Add_mentors from './routes/Add_mentors';

function App() {
  return (
  
    <BrowserRouter>

    <Navbar></Navbar>

    <Sidebar></Sidebar>
    <Routes>
    <Route path='/' element={<Mentors/>}></Route>
      <Route path='/Mentors' element={<Mentors/>}></Route>
      <Route path='/Students' element={<Students/>}></Route>
      <Route path='/Add_New_students' element={<Add_New_students/>}></Route>
      <Route path='/Add_mentors' element={<Add_mentors/>}></Route>
      <Route path='/Addstudents:id' element={<Addstudents/>}></Route>
      <Route path='/Assigned_students:id' element={<Assigned_students/>}></Route>
    </Routes>
    </BrowserRouter>
   
    
  )
}

export default App;
