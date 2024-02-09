import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function Homepage({ employeeData }) {
  return (
    <div className="homepage">
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList employeeData={employeeData} />
    </div>
  );
}

