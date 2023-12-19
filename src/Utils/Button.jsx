const Button = ({ children, className = "", onClick }) => {

    return (
        <button onClick={onClick} className={`bg-blue-900 rounded flex items-center justify-center py-2 px-4 text-center text-white font-semibold my-4 ${className}`}>
            {children}
        </button>
    );
};

export default Button;