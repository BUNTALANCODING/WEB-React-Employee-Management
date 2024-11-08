import * as React from "react";


export function Tracker() {
    const [count, setCount] = React.useState(0);
    const ref = React.useRef({
        naik: 0,
        turun: 0
    });

    const naikin = () => {
        ref.current.naik++
        setCount(count + 1)
    }

    const turun = () => {
        ref.current.turun++
        setCount(count - 1)
    }

    return (
        <div>
            <button onClick={naikin}>
                +++++
            </button>
            <button onClick={turun}>
                -----
            </button>
            <div>
                Count : {count}
            </div>

            <div>
                Tombol di klik {ref.current.naik + ref.current.turun} Kali
            </div>

            <div>
                Naik di klik : {ref.current.naik} kali
            </div>

            <div>
                Turun di klik : {ref.current.turun} kali
            </div>
        </div>
    )
}

export default Tracker;