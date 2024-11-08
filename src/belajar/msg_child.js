export function MessageWithChildren({ children, penting = false }) {
    return (
        <div>
            {penting ? "Pesan penting" : "Pesan biasa"}
            {children}
        </div>
    )
}