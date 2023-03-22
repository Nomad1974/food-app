import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { loadCategories } from './categoryListSlice';

import './categoriesList.scss';

const CategoriesList = () => {
    const dispatch = useDispatch();
    const {entities, status, error} = useSelector(state => state.categories);
    console.log(error);
    console.log(entities)
    
    return (  
        <div>
            <h1>Категории: {entities.length}</h1>
            <h2>status: {status}</h2>
            <p>{error}</p>
        </div>
    );
}

export default CategoriesList;