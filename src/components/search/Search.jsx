import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { ReactComponent as FoodCategory } from '../../icons/category.svg';

import useSearch from './useSearch';

import './search.scss';

const Search = () => {
    const [handleChange, handleKey, searchValue, handleSubmit] = useSearch();

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
