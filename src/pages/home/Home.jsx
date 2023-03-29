import { useSelector, useDispatch } from 'react-redux';

import { selectAllCategories } from '../categoryList/categoryListSlice';
import { setVisible } from './homeSlice';
import { ReactComponent as ScrollButton } from '../../icons/up.svg';

import CategoriesList from '../categoryList/CategoriesList';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Transitions from '../../features/Transition';
import Error from '../Error/Error';
import Preloader from '../../features/preloader/Preloader';

import Container from '../../components/conteiner/Conteiner';
import './home.scss';

const Home = () => {
    const { status, error } = useSelector(selectAllCategories);


    return (
        <>
            <Container>
                <Search />
                    {status === 'loading' && <Preloader />}
                    {error ? <Error /> : <CategoriesList />}
            </Container>
        </>
        );
    };
    
    export default Home;
