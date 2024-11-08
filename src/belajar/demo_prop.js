import React from "react";

export function SatuProp(props) {
    return (
        <h2>
            Nilai props: {props.anu}
        </h2 >
    );
}

export function BanyakProp(props) {
    return (
        <p>
            <h1>Ini ke 1 {props.model}</h1>
            <h1>Ini ke 2 {props.merek}</h1>
            <h1>Ini ke 3 {props.harga}</h1>
        </p>
    );

}

export function JSONProp(props) {
    const { mobil } = props;
    return (
        <p>
            <h1>Ini ke 1 {mobil.model}</h1>
            <h1>Ini ke 2 {mobil.merek}</h1>
            <h1>Ini ke 3 {mobil.harga}</h1>
        </p>
    );

}