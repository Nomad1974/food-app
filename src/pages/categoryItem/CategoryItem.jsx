import { Link } from "react-router-dom";

import "./categoryItem.scss";

const CategoryItem = ({strCategory, strCategoryThumb, strCategoryDescription}) => {
    //вытаскиваем из пропсов значения и подставляем их в нужные поля
    /* const {
        strCategory,
        strCategoryThumb,
        strCategoryDescription
    }  = props; */

    return (
        <div className="card">
            <div className="card_image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card_content">
                <span className="card_content__title">{strCategory}</span>
                <p className="card_content__description">
                    {/* слишком большое описание получается и не влезает в карточку нормально. режем. */}
                    {strCategoryDescription.slice(0, 60)}...
                </p>
            </div>
            <div className="card_actions">
                <Link
                    to={`/category/${strCategory}`}
                    className="card_actions__btn">
                    перейти
                </Link>
            </div>
        </div>
    );
}

export default CategoryItem;