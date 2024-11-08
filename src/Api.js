const BASE_URL = "https://belajaroracle.com/api/hrapi/emp1";

export const getEmployees = async () => {
    const response = await fetch(`${BASE_URL}/read.php`);

    return response.json();


}

export const getEmployeeById = async (id) => {
    const response = await fetch(`${BASE_URL}/find.php?id=${id}`);

    return response.json();
}

export const addEmployee = async (employee) => {
    const response = await fetch(`${BASE_URL}/insert.php`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(employee)
    });
    return response.json();
}

export const updateEmployee = async (employee) => {
    const response = await fetch(`${BASE_URL}/update.php`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(employee)
    });
    return response.json();
}


export const deleteEmployee = async (id) => {
    const response = await fetch(`${BASE_URL}/delete.php?id=${id}`, {
        method: "GET"
    });
    return response.json();
}