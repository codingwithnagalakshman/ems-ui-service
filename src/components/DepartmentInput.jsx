import Input from "./UI/Input"
import {useState} from "react"
import classes from "./DepartmentInput.module.css"
import DisplayTable from "./UI/DisplayTable"

const DepartmentInput = () => {
  const [name, setName] = useState("")
  const [deptEmpList, setDeptEmpList] = useState([])

  const changeHandler = (e) => {
    setName(e.target.value)
  }

  const searchHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `http://localhost:8080/employees-by-department-name/${name}`
      )
      const employeeList = await response.json()
      setDeptEmpList(employeeList)
    } catch (error) {}
  }

  return (
    <>
      <form className={classes.form} onSubmit={searchHandler}>
        <Input
          label="Department Name:"
          type="text"
          placeholder="Enter department name"
          value={name}
          onChange={changeHandler}
        />
        <button className={classes.button}>Search</button>
      </form>
      <div className={classes.items}>
        {deptEmpList && <DisplayTable empData={deptEmpList} />}
      </div>
    </>
  )
}

export default DepartmentInput
