import DisplayTable from "./DisplayTable"
import classes from "./ToggleComponent.module.css"
import {useEffect, useState} from "react"

const ToggleComponent = () => {
  const [toggle, setToggle] = useState(false)
  const [empList, setEmpList] = useState([])

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await fetch(
        `http://localhost:8080/employees-by-salary/10000/${!toggle}`
      )
      const employeeList = await data.json()
      setEmpList(employeeList)
    }

    fetchData().catch(() => {})
  }, [toggle])

  const toggleHandler = (e) => {
    setToggle(!toggle)
  }

  return (
    <>
      <button className={classes.button} onClick={toggleHandler}>
        {toggle ? "Salary > 10K" : "Salary < 10K"}
      </button>
      <div className={classes.items}>
        {empList && <DisplayTable empData={empList} />}
      </div>
    </>
  )
}

export default ToggleComponent
