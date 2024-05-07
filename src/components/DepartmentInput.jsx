import Input from "./UI/Input"
import {useState} from "react"
import classes from "./DepartmentInput.module.css"

const empList = [
  "Employee1",
  "Employee2",
  "Employee3",
  "Employee4",
  "Employee5",
  "Employee6",
  "Employee7",
  "Employee8",
]

const DepartmentInput = () => {
  const [name, setName] = useState("")
  const [deptEmpList, setDeptEmpList] = useState([])

  const changeHandler = (e) => {
    setName(e.target.value)
  }

  const searchHandler = (e) => {
    e.preventDefault()
    setDeptEmpList(empList)
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
        {deptEmpList.map((emp) => (
          <div className={classes.item}> {emp}</div>
        ))}
      </div>
    </>
  )
}

export default DepartmentInput
