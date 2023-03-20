
import { ReactComponent as SearchIcon} from "../../icons/search.svg";
import { ReactComponent as FoodCategory} from "../../icons/category.svg"
import './search.scss';

const Search = () => {

    return (  
        <div className="search">
            <div className="search_wrapper">
                <span className="search_icon-wrapper">
                    <FoodCategory />
                </span>
                <input  className="search_input"
                        type="text" 
                        id="search-field"
                        placeholder='поиск'/>
                <button className="search_button">
                    <SearchIcon />
                </button>
            </div>
        </div>
    );
}

export default Search;