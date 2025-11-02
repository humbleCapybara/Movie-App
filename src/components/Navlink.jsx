import Button from './Button';
import { Link } from 'react-router-dom';

function Navlink({children, href}) {
    return (
        <Link to={href}><Button>{children}</Button></Link>
    )
}

export default Navlink;