import React from "react";

export class HeaderDaftarSiswa extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Daftar Siswa
                </h1>
            </div>
        )
    }
}

export function DaftarSiswa({ data }) {
    return (
        <ul>
            <li>{data.nama}</li>
        </ul>
    )

}
