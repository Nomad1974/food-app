
import "./categoryItem.scss";

const CategoryItem = () => {
    return (  
        <div className="card">
            <div className="card_image">
                <img src="https://www.themealdb.com/images/category/beef.png" alt="Beef" />
            </div>
            <div className="card_content">
                <span className="card_content__title">
                    Beef
                </span>
                <p className="card_content__description">
                    Beef is the culinary name for meat from cattle, particularly...
                </p>
            </div>
            <div className="card_actions">
                <button className="card_actions__btn">
                    ознакомиться
                </button>
            </div>
        </div>
    );
}

export default CategoryItem;