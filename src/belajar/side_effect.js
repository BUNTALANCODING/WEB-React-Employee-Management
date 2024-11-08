import React, { useEffect, useState } from "react";

export function EfekSamping() {
    const [data, setData] = useState(null);


    useEffect(() => {
        fetch("https://belajaroracle.com/api/hrapi/emp1/read.php")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(console.error("Ada masalah")
            )
    }, []);



    if (!data) {
        return <p>Loading........Sedang nyodot data.......</p>
    }

    return (
        <ul>
            {data.map(item => (
                <li style={{ listStyle: "none", backgroundColor: "pink", margin: "20px", padding: "20px", borderRadius: "10px" }} key={item.id}>
                    {item.firstName}
                </li>
            ))}
        </ul>
    )

}
