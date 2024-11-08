export function FormatDate({ date }) {
    return (
        <div>
            {
                date.toLocaleString()
            }
        </div>
    )
}