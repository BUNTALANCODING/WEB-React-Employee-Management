import React from "react";
import { SatuProp, BanyakProp, JSONProp } from "./demo_prop";

class App extends React.Component {
    data = {
        mobil: {
            merek: 'Toyota',
            model: 'Alya',
            harga: '2000000000'
        }
    };
    render() {
        return (
            <div>
                <SatuProp anu="ini Anu ke-1"></SatuProp>
                <SatuProp anu="ini Anu ke-1" />

                <BanyakProp
                    merek="Honda"
                    model="Supra geter"
                    harga="2000000"
                />

                <JSONProp
                    mobil={this.data.mobil}

                />

            </div>
        );
    }
}
export default App;