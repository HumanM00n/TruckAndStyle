export const SpinnerTns = () => {
    return (
        <div className="w-full h-full flex items-center justify-center absolute">
            <span className="relative left-1/2">Chargement...</span>
            <div className="spinner-border color--form h-64 w-64 mx-auto" role="status"></div>
        </div>
    )
}
export default SpinnerTns();