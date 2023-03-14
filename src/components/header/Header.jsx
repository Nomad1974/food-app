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
            <ul className="header_information">
                <li>
                    <Link to="About" className="header_information_link">
                        О нас
                    </Link>
                </li>
                <li>
                    <Link to="Contacts" className="header_information_link">
                        Контакты
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
