import { Link } from "react-router-dom";

const CategoryItem = ({strCategory, strCategoryThumb, strCategoryDescription}) => {

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
                    Watch
                </Link>
            </div>
        </div>
    );
}

export default CategoryItem;