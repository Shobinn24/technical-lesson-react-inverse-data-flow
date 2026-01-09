import { useState } from "react";
import PropTypes from "prop-types";

function Employee({employee,handleEdit,handleDelete}) {
  const [edit,setEdit] = useState(false)
  const [roleEdit,setroleEdit] = useState(employee.role)

  function handleSubmit(e){
    e.preventDefault()
    const editedEmployee = {
      ...employee,
      role: roleEdit
    }
    handleEdit(editedEmployee)
    setEdit(false)
  }
  return (
    <tr>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td onClick={()=>setEdit(true)}>{
              edit ? 
              <form onSubmit={(e)=>handleSubmit(e)} >
                <input onChange={(e) => setroleEdit(e.target.value)} value={roleEdit}/>
              </form>
              : employee.role}</td>
        <td>
          <button onClick={()=>handleDelete(employee)}> X </button>
        </td>
    </tr>
  );
}

Employee.propTypes = {
  employee: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string
  }).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Employee;