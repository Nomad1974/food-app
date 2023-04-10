import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './header.scss';
import { selectSearch } from '../search/searchSlice';
import { useCallback } from 'react';

const Header = () => {
    const dispatch = useDispatch();
    const {clearControls} = useSelector(selectSearch);

    const cleanUp = () => dispatch(clearControls());

    return (
        <nav className="header">
            <div className="header_wrapper">
                <Link to="/home" className="header_logo" onClick={cleanUp}>
                Book of recipes
                </Link>
            </div>
        </nav>
    );
};

export default Header;
