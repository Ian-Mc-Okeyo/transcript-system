import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateCourseSchedule from './pages/createCourseSchedule';
import UploadTranscript from './pages/uploadTranscript';
import Courses from './pages/courses';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={CreateCourseSchedule}/>
        <Route path='/upload-transcript' exact Component={UploadTranscript}/>
        <Route path='/courses' exact Component={Courses}/>
      </Routes>
    </Router>
  )
}

export default App
