import { useState } from 'react'
import './App.css'
import EmployeeForm from './components/EmployeeForm'
import employeeData from "./data/employees";
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';

function App() {
  const [employees, setEmployees] = useState(employeeData)
  function handleDelete(employeeToDelete){
    const newArray = employees.filter(employee =>{
      if(employee.id==employeeToDelete.id){
        return false
      }
      return true
    })
    setEmployees(newArray)
  }
  function handleEdit(employeeToEdit){
    const newArray = employees.map(employee=>{
      if(employee.id==employeeToEdit.id){
        return employeeToEdit
      }
      return employee
    })
    setEmployees(newArray)
  }
  return (
    <div>
      <Header/>
      <EmployeeForm employees={employees} setEmployees={setEmployees}/>
      <EmployeeList employees={employees} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  )
}
export default App