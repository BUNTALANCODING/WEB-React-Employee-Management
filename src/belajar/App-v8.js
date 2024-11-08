import React from "react";
import { Inline } from "./inline";
import { JSONStyle } from "./json_css";
import { ExternalCSS } from "./external_css";

function App() {
    return (
        <div>
            <Inline />
            <JSONStyle />
            <ExternalCSS />
        </div>
    );
}
export default App;
