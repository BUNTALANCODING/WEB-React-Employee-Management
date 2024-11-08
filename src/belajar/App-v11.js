import React from "react";
import { Massage } from "./msg";
import { FormatDate } from "./format_date";
import { MessageWithChildren } from "./msg_child";

function App() {
    return (
        <div style={{ backgroundColor: "black", color: "wheat", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "20px", margin: "20px", borderRadius: "20px" }}>
            <FormatDate date={new Date()} />
            <Massage
                teks=" Form telah terkirim"
                penting={false}
            />

            <MessageWithChildren penting={false}>
                <p>Data anda telah kami terima</p>
                <i>Request akan segera kami terima</i>
            </MessageWithChildren>
        </div>
    );
}
export default App;