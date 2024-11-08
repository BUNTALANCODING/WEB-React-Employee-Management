import { render } from "@testing-library/react";
import React from "react";

class Pertama extends React.Component {
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

function Kedua() {
    return (
        <div>
            <h1>
                Ini Babi Aku
            </h1>
        </div>
    );
}

const Ketiga = () => {
    return (
        <div>
            <h1>
                Ini Anjing Aku
            </h1>
        </div>
    );
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Pertama />
                <Pertama></Pertama>
                <Kedua />
                <Kedua></Kedua>
                <Ketiga />
                <Ketiga></Ketiga>
            </div>
        );
    }
}
export default App;