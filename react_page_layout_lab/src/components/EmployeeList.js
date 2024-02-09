import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList({ employeeData }) {
  
  return (
    <div>
      {employeeData.map((employee, i) => {
        return(
          <EmployeeListItem name={employee.name} title={employee.title} />
        )
      })}
    </div>
  );

};
