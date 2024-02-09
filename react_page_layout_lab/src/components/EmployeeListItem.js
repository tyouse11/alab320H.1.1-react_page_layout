
export default function EmployeeListItem(props) {
  return (
    <div className="employeeListItem">
      <h3>{props.name}</h3>
      <p>{props.title}</p>
    </div>
  );
};