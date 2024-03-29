import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Button from '../../components/button/Button';
import './main.scss';

const Main = () => {
    return (
        <section className="main">
            <Helmet>
                <title>The cooking book</title>
            </Helmet>
            <h2 className='main_small-heading'>
            Cook With Love
            </h2>
            <div className='main_heading'>
                <span className='main_heading-text'>
                    Welcome to yummy food world
                </span>
            </div>
            <Link  to={'/home'}>
                <Button />
            </Link>
            
        </section>
    );
}

export default Main;