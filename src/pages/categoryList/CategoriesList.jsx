import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { loadCategories, selectAllCategories } from './categoryListSlice';

import CategoryItem from '../categoryItem/CategoryItem';

const CategoriesList = () => {
    const dispatch = useDispatch();
    const {entities} = useSelector(selectAllCategories);


    useEffect(() => {
        if(!entities.length) {
            dispatch(loadCategories())
        }
    }, [dispatch, entities.length]);
    
    
    return (  
        <div className='list'>
                {/* мапим entities и складываем каждый элемент в карточку деструктуризацией и ключ */}
                {entities.map(elem => <CategoryItem  key={elem.idCategory} {...elem}/>)}
        </div>
    );
}

export default CategoriesList;