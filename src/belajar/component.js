import React from "react";

export class Pertama extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Ini Ayam Aku
                </h1>
            </div>
        );
    }
}

export default function Kedua() {
    return (
        <div>
            <h1>
                Ini Babi Aku
            </h1>
        </div>
    );
}

export const Ketiga = () => {
    return (
        <div>
            <h1>
                Ini Anjing Aku
            </h1>
        </div>
    );
}