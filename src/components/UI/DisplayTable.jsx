import classes from "./DisplayTable.module.css"

const DisplayTable = ({empData}) => {
  return (
    <table className={classes["styled-table"]}>
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Employee Salary</th>
          <th>Department Name</th>
        </tr>
      </thead>
      <tbody>
        {empData.map((employee) => (
          <tr key={employee.employeeId}>
            <td>{employee.employeeName}</td>
            <td>{employee.employeeSalary}</td>
            <td>{employee.departmentName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DisplayTable
