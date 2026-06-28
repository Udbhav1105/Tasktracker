import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CreateTask from './components/CreateTask'
import Dashboard from './components/Dashboard'
import TaskForm from './components/Taskform'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/create' element={<CreateTask />} />
      <Route path='/taskform' element={<TaskForm />} />
    </Routes>
  )
}

export default App
