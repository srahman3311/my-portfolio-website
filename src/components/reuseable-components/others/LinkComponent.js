import { Link } from "react-router-dom";



function LinkComponent({ href, text }) {

    return (
        <Link to = {href}>{text}</Link>
    );

}



export default LinkComponent;