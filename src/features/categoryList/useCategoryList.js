import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { loadCategories } from './categoryListSlice';
import { selectVisibleCategories } from '../../components/search/searchSlice';

const useCategorylist = () => {
    const dispatch = useDispatch();
    const {searchName} = useSelector(state => state.search);
    const list = useSelector(state => selectVisibleCategories(state, {searchName}));

    useEffect(() => {
        if(list.length === 0) {
            dispatch(loadCategories())
        } 
    }, [dispatch, list.length]);

    return [list];
}

export default useCategorylist;