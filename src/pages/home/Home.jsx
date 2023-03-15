import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Transitions from '../../components/Transition';
import './home.scss';

const Home = () => { 
    return (  
            <Transitions>
                <div className="home">
                    <Header />
                        <main className='home_content'>
                            
                        </main>
                    <Footer />
                </div>
            </Transitions>
    );
}

export default Home;
