import { Link } from 'react-router-dom';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Transitions from '../../components/Transition';
import { Preloader } from '../../features/preloader/Preloader';
import CategoriesList from '../../features/categoryList/CategoriesList';
import './home.scss';

const Home = () => { 
    return (  
            <Transitions>
                <div className="home">
                    <Header />
                        <main className='home_content'>
                            <Search />
                            <CategoriesList />
                        </main>
                    <Footer />
                </div>
            </Transitions>
    );
}

export default Home;
