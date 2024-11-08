import React, { useState, useEffect } from "react";
import { EmployeeForm } from "./Component/EmployeeForm";
import { EmployeeList } from "./Component/EmployeeList";
import { getEmployees, updateEmployee, deleteEmployee, addEmployee } from "./Api";

function App() {
    const [employees, setEmployees] = useState([])

    const [selectedEmployee, setSelectedEmployee] = useState([])

    const loadEmployees = async () => {
        const data = await getEmployees();
        setEmployees(data);
    }

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
    }

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        loadEmployees();
    }

    const handleSave = async (employee) => {
        if (employee.id) {
            await updateEmployee(employee);
        } else {
            await addEmployee(employee)
        }
        loadEmployees();
        setSelectedEmployee(null);

    }

    useEffect(() => {
        loadEmployees();
    })


    return (
        <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-center">APLIKASI MANAJEMEN KARYAWAN</h1>
            <EmployeeForm
                selectedEmployee={selectedEmployee}
                onSave={handleSave}
                onCancel={() => setSelectedEmployee(null)}
            />
            <br />
            <EmployeeList
                employees={employees}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default App;
