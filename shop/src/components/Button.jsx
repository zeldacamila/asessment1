import { Link } from "react-router-dom";
const Button = ({ buttonName, id }) => {
    return (
        <button
            className="button"
            >
            <Link to={`/ProductDetail/${id}`}>{buttonName}</Link>
        </button>
        
    )
}

export default Button;