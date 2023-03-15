import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <nav className="header">
            <div className="header_wrapper">
                <Link to="/home" className="header_logo">
                    Книга Рецептов
                </Link>
            </div>
        </nav>
    );
};

export default Header;
