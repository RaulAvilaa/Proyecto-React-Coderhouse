const Button = ({ children, className = "", onClick, disabled = false }) => {

    return (
        <button onClick={onClick}
            disabled={disabled}
            className={`bg-blue-900 rounded flex items-center justify-center py-2 px-4 text-center text-white font-semibold my-4 hover:bg-blue-800 transition duration-200 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;