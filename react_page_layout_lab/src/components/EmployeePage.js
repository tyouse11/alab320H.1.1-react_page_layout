import Header from "./Header";

export default function EmployeePage({employeeData}) {
  return (
    <div className="employeePage">
        <Header title="Employee" />
        <div className="employeeInfo"> 
        <h1>{employeeData[1].name}</h1>
        <h3>{employeeData[1].title}</h3>
        <div>Call Office: {employeeData[1].office}</div>
        <div>Mobile: {employeeData[1].mobile}</div>
        <div>SMS: {employeeData[1].sms}</div>
        <div>Email: {employeeData[1].email}</div>
        </div>
    </div>
  )
}
