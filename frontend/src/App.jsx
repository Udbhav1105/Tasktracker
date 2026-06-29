import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CreateTask from './components/CreateTask'
import Dashboard from './components/Dashboard'
import EditTask from './components/EditTask'
import TaskForm from './components/TaskForm'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/create' element={<CreateTask />} />
      <Route path='/taskform' element={<TaskForm />} />
      <Route path="/edit/:id" element={<EditTask />} />
    </Routes>
  )
}

export default App
