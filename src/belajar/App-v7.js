import React from "react";

import { HeaderDaftarSiswa, DaftarSiswa } from "./demo_prop_2";

const semuaSiswa = {
    data: [
        { nama: 'Amir' },
        { nama: 'Budi' },
        { nama: 'Susi' },
        { nama: 'Leo' },
        { nama: 'Sutrisno' }
    ]
}

function App() {
    return (
        <div>
            <HeaderDaftarSiswa />
            <ul>
                {
                    semuaSiswa.data.map(
                        item => (
                            <DaftarSiswa data={item} />
                        )
                    )
                }
            </ul>
        </div>
    );
}
export default App;