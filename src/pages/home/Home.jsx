import Header from '../../components/header/Header';
import Transitions from '../../components/Transition';
import './home.scss';

const Home = () => {
    return (  
        <>
            <Transitions>
                <div className="home">
                    <Header />
                </div>
            </Transitions>
        </>
    );
}

export default Home;
