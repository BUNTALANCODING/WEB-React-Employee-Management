import React, { useState, useEffect } from "react";

export const EmployeeForm = ({ selectedEmployee, onCancel, onSave }) => {


    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: ""
    })

    const handleCancel = () => {
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: ""
        });
        onCancel();
    }


    useEffect(() => {
        if (selectedEmployee) {
            setEmployee(selectedEmployee);
        }
    }, [selectedEmployee]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(employee);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({
            ...employee, [name]: value
        });
    }

    return (
        <div>
            <form className="p-4 space-y-4 bg-gray-100 rounded-xl w-96" onSubmit={handleSubmit}>
                <input className=" bg-gray-800 text-white placeholder-white rounded-xl p-5 shadow-lg w-full" type="text" name="firstName" placeholder="First Name" value={employee.firstName} onChange={handleChange} />
                <input className=" bg-gray-800 text-white placeholder-white rounded-xl p-5 shadow-lg w-full" type="text" name="lastName" placeholder="Last Name" value={employee.lastName} onChange={handleChange} />
                <input className=" bg-gray-800 text-white placeholder-white rounded-xl p-5 shadow-lg w-full" type="text" name="emailId" placeholder="Email" value={employee.emailId} onChange={handleChange} />
                <button className="bg-green-500 rounded-3xl p-3 w-full text-xl text-white">
                    Submit
                </button>

                <button className="bg-blue-500 rounded-3xl p-3 w-full text-xl text-white" onClick={handleCancel}>
                    Batal
                </button>
            </form>
        </div>

    );
}