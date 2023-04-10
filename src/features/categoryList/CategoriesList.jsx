import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { loadCategories } from './categoryListSlice';

import CategoryItem from '../categoryItem/CategoryItem';
import { selectVisibleCategories } from '../../components/search/searchSlice';

const CategoriesList = () => {
    const dispatch = useDispatch();
    const {searchName} = useSelector(state => state.search);
    const list = useSelector(state => selectVisibleCategories(state, {searchName}));
    
    useEffect(() => {
        if(list.length === 0) {
            dispatch(loadCategories())
        } 
    }, [dispatch, list.length]);
    
    return (  
        <div className='list'>
            {/* мапим entities и складываем каждый элемент в карточку деструктуризацией и ключ */}
            {list.map(elem => <CategoryItem  key={elem.idCategory} {...elem}/>)}
        </div>
    );
}

export default CategoriesList;