export const EmployeeList = ({ employees, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white shadow-lg rounded-lg">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="w-1/6 p-3 text-left">ID</th>
                        <th className="w-1/5 p-3 text-left">First Name</th>
                        <th className="w-1/5 p-3 text-left">Last Name</th>
                        <th className="w-1/3 p-3 text-left">Email</th>
                        <th className="w-1/5 p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id} className="bg-white border-b hover:bg-gray-100">
                            <td className="p-3 text-gray-800">{emp.id}</td>
                            <td className="p-3 text-gray-800">{emp.firstName}</td>
                            <td className="p-3 text-gray-800">{emp.lastName}</td>
                            <td className="p-3 text-gray-800">{emp.emailId}</td>
                            <td className="p-3 text-gray-800">
                                <button className="p-1 bg-blue-500 text-white rounded w-32 mb-5" onClick={() => onEdit(emp)}>Edit</button>
                                <button className="p-1 bg-red-500 text-white rounded w-32" onClick={() => onDelete(emp.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
