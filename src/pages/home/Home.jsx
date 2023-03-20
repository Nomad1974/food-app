import { Link } from 'react-router-dom';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Transitions from '../../components/Transition';
import { Preloader } from '../preloader/Preloader';
import './home.scss';

const Home = () => { 
    return (  
            <Transitions>
                <div className="home">
                    <Header />
                        <main className='home_content'>
                            <Search />
                        </main>
                    <Footer />
                </div>
            </Transitions>
    );
}

export default Home;
