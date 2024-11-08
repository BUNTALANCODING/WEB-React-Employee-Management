import React from "react";
// import Kedua, { Pertama, Ketiga } from "./component";
import { Pertama } from "./Pertama";
import Kedua from "./Kedua";
import { Ketiga } from "./Ketiga";


class App extends React.Component {
    render() {
        return (
            <div>
                <Pertama></Pertama>
                <Kedua></Kedua>
                <Ketiga></Ketiga>
            </div>
        );
    }
}
export default App;