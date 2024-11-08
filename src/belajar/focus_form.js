import React, { useRef } from "react";

export const FocusForm = () => {
    const inputRef = useRef(document.createElement("input"))
    const inputFocus = () => {
        inputRef.current.focus()
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <input style={{ backgroundColor: "pink", borderRadius: "20px", padding: "20px" }} ref={inputRef}></input>
            <button onClick={inputFocus}>Fokuskan kursor</button>
        </div>
    )
}