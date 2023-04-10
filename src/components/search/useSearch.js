import { useDispatch, useSelector } from 'react-redux';

import { setSearchName, selectSearch, setSearchValue } from './searchSlice';

const useSearch = () => {
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

    return [handleChange, handleKey, searchValue, handleSubmit];
}

export default useSearch;