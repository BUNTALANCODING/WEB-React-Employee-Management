import React, { useState } from "react";
// import "./App.css";


export const Penghitung = () => {
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
        <div style={{ justifyContent: "center", display: "flex", alignItems: "center", justifyContent: "space-around", backgroundColor: "burlywood" }}>
            <button style={{ backgroundColor: "peachpuff", border: "none", padding: "10px", borderRadius: "10px", margin: "20px" }} type="button" onClick={naikanAngka}>
                Naikin Angkaaaaaa !!!!!
            </button>
            <div style={{ margin: "20px" }}>
                {angka + " Yeaaaaaah"}
            </div>
            <button style={{ backgroundColor: "peachpuff", border: "none", padding: "10px", borderRadius: "10px", margin: "20px" }} type="button" onClick={turunkanAngka}>
                Turunin Angkaaaaaa !!!!!
            </button>
            <br></br>
            <button style={{ backgroundColor: "peachpuff", border: "none", padding: "10px", borderRadius: "10px", margin: "20px" }} type="button" onClick={resetanAngka}>
                Reset Angkaaaaaa !!!!!
            </button>
        </div >
    );
};

export default Penghitung;
