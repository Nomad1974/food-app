import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { ReactComponent as FoodCategory } from '../../icons/category.svg';

import './search.scss';
import { setSearchName, selectSearch, setSearchValue } from './searchSlice';

const Search = () => {

    const dispatch = useDispatch();
    const {searchValue} = useSelector(selectSearch);

    const handleSubmit = () =>{ 
        dispatch(setSearchName(searchValue));
        dispatch(setSearchValue(''));
    };

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleChange = (event) => {
        dispatch(setSearchValue(event.target.value));
    };

    return (
        <div className="search">
            <div className="search_wrapper">
                <span className="search_icon-wrapper">
                    <FoodCategory />
                </span>
                <input
                    className="search_input"
                    type="text"
                    placeholder="search category"
                    onKeyDown={handleKey}
                    onChange={handleChange}
                    value={searchValue}
                />

                <button 
                    className="search_button" 
                    onClick={handleSubmit}
                >
                    <SearchIcon />
                </button>
            </div>
        </div>
    );
};

export default Search;
