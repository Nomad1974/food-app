import Button from '../../components/button/Button';
import './main.scss';

const Main = () => {
    return (
        <section className="main">
            <h2 className='main_small-heading'>
            Cook With Love
            </h2>
            <div className='main_heading'>
                <span className='main_heading-text'>
                    Добро пожаловать в мир вкусной еды
                </span>
            </div>
            <Button />
        </section>
    );
}

export default Main;