import useCategorylist from './useCategoryList';

import CategoryItem from '../categoryItem/CategoryItem';
import SearchError from '../../components/searchError/SearchError';

const CategoriesList = () => {
    const [list] = useCategorylist();
    
    return (
        <>
            {!list.length && <SearchError />}
            <div className='list'>           
                {/* мапим entities и складываем каждый элемент в карточку деструктуризацией и ключ */}
                {list.map(elem => <CategoryItem  key={elem.idCategory} {...elem}/>)}
            </div>
        </>  
    );
}

export default CategoriesList;