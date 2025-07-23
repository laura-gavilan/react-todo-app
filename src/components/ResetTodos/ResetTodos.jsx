import "./ResetTodos.css"

export const ResetTodos = ({ onReset }) => {
    return (
        <button
            className="reset-btn"
            onClick={onReset}>
            Reset
        </button>

    )
}