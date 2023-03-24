import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { loadCategories, selectAllCategories } from './categoryListSlice';

import CategoryItem from '../../components/categoryItem/CategoryItem';
import './categoriesList.scss';

const CategoriesList = () => {
    

    
    return (  
        <div className='list'>
            <CategoryItem />
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
        </div>
    );
}

export default CategoriesList;