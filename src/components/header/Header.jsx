import { Link } from 'react-router-dom';
import useHeader from './useHeader';

import './header.scss';

const Header = () => {
    const [cleanUp] = useHeader();

    return (
        <nav className="header">
            <div className="header_wrapper">
                <Link to="/" className="header_logo" onClick={cleanUp}>
                Book of recipes
                </Link>
            </div>
        </nav>
    );
};

export default Header;
