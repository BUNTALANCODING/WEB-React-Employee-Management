import React, { useState } from "react";

const App = () => {
    const [angka, setAngka] = useState(0);

    const naikanAngka = () => {
        setAngka(angka + 1);
    };

    const turunkanAngka = () => {
        setAngka(angka - 1);
    };

    const resetanAngka = () => {
        setAngka(0);
    };

    return (
        <div style={{ justifyContent: "center", display: "flex", alignItems: "center", justifyContent: "space-around", backgroundColor: "burlywood", margin: "10px", color: "white", borderRadius: "10px", flexDirection: "column" }}>

            <div style={{ margin: "20px" }}>
                {angka + " Yeaaaaaah"}
            </div>
            <button style={{ backgroundColor: "peachpuff", border: "none", padding: "25px", borderRadius: "10px", margin: "20px", width: "200px" }} type="button" onClick={naikanAngka}>
                Naikin Angkaaaaaa !!!!!
            </button>
            <button style={{ backgroundColor: "blueviolet", border: "none", padding: "25px", borderRadius: "10px", margin: "20px", width: "200px" }} type="button" onClick={turunkanAngka}>
                Turunin Angkaaaaaa !!!!!
            </button>
            <button style={{ backgroundColor: "royalblue", border: "none", padding: "25px", borderRadius: "10px", margin: "20px", width: "200px" }} type="button" onClick={resetanAngka}>
                Reset Angkaaaaaa !!!!!
            </button>
        </div >
    );
};

export default App;
