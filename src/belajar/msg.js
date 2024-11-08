export function Massage({ teks, penting }) {
    return (
        <div>
            {penting ? "ini penting" : "ini tidak penting"}
            {teks}
        </div>
    )
}