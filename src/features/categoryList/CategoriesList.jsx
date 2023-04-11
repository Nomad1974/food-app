import useCategorylist from './useCategoryList';

import CategoryItem from '../categoryItem/CategoryItem';

const CategoriesList = () => {
    const [list] = useCategorylist();
    
    return (
        <>
            <div className='list'>           
                {/* мапим entities и складываем каждый элемент в карточку деструктуризацией и ключ */}
                {list.map(elem => <CategoryItem  key={elem.idCategory} {...elem}/>)}
            </div>
        </>  
    );
}

export default CategoriesList;