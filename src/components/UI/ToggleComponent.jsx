import classes from "./ToggleComponent.module.css"
import {useEffect, useState} from "react"

const empListwithMoreSalary = [
  "Employee1",
  "Employee2",
  "Employee3",
  "Employee4",
  "Employee5",
  "Employee6",
  "Employee7",
  "Employee8",
]

const empListwithLessSalary = [
  "Employee10",
  "Employee20",
  "Employee30",
  "Employee40",
  "Employee50",
  "Employee60",
  "Employee70",
  "Employee80",
]

const ToggleComponent = () => {
  const [toggle, setToggle] = useState(false)
  const [empList, setEmpList] = useState([])

  useEffect(() => {
    if (toggle) {
      setEmpList(empListwithMoreSalary)
    } else {
      setEmpList(empListwithLessSalary)
    }
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
        {empList.map((emp) => (
          <div className={classes.item}>{emp}</div>
        ))}
      </div>
    </>
  )
}

export default ToggleComponent
