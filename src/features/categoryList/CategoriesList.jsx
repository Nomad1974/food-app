import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { loadCategories, selectAllCategories } from './categoryListSlice';

import CategoryItem from '../../components/categoryItem/CategoryItem';
import './categoriesList.scss';
import Preloader from '../preloader/Preloader';
import Error from '../../pages/Error/Error';

const CategoriesList = () => {
    const dispatch = useDispatch();
    const {entities, status, error} = useSelector(selectAllCategories);


    useEffect(() => {
        if(!entities.length) {
            dispatch(loadCategories())
        }
    }, [dispatch, entities.length]);
    console.log(entities);
    
    return (  
        <div className='list'>
            {/* отцентровать прелоадер !!! */}
                {status === 'loading' && <Preloader />}
                {error && <Error />}
                {/* мапим entities и складываем каждый элемент в карточку деструктуризацией и ключ */}
                {entities.map(elem => <CategoryItem  key={elem.idCategory} {...elem}/>)}
            </div>
    );
}

export default CategoriesList;