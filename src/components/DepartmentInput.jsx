import Input from "./UI/Input"
import {useState} from "react"
import classes from "./DepartmentInput.module.css"
import DisplayTable from "./UI/DisplayTable"
import ErrorText from "./UI/ErrorText"

const DepartmentInput = () => {
  const [name, setName] = useState("")
  const [deptEmpList, setDeptEmpList] = useState(null)
  const [error, setError] = useState(false)
  const [errorDetails, setErrorDetails] = useState(null)

  const changeHandler = (e) => {
    setName(e.target.value)
  }

  const searchHandler = async (e) => {
    e.preventDefault()
    setError(false)
    if (
      name === null ||
      name === "" ||
      name === undefined ||
      name.trim().length === 0
    ) {
      let errorDetails = {
        errorCode: "EMPTY_FIELD",
        errorMessage: "Enter valid Department name",
      }
      setError(true)
      setErrorDetails(errorDetails)
      return
    }

    let response
    try {
      response = await fetch(
        `http://localhost:8080/employees-by-department-name/${name}`
      )
    } catch (error) {
      let errorDetails = {
        errorCode: "SERVICE_UNAVAILABLE",
        errorMessage: "Sorry, something has gone wrong. Please try later !!!!",
      }
      setError(true)
      setErrorDetails(errorDetails)
      return
    }

    if (response.ok) {
      const employeeList = await response.json()
      setDeptEmpList(employeeList)
    } else {
      const errorData = await response.json()
      setErrorDetails(errorData)
      setError(true)
    }
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
        {error && <ErrorText errorMessage={errorDetails.errorMessage} />}
        {!error && deptEmpList && <DisplayTable empData={deptEmpList} />}
      </div>
    </>
  )
}

export default DepartmentInput
