import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { selectAllCategories } from '../../features/categoryList/categoryListSlice';

import CategoriesList from '../../features/categoryList/CategoriesList';
import Search from '../../components/search/Search';
import Error from '../Error/Error';
import Preloader from '../../features/preloader/Preloader';
import Container from '../../components/conteiner/Conteiner';
import './home.scss';

const Home = () => {
    const { status, error } = useSelector(selectAllCategories);

    return (
        <>
            <Helmet>
                <title>
                    The food categories list
                </title>
            </Helmet>
            <Container>
                <Search />
                    {status === 'loading' && <Preloader />}
                    {error ? <Error /> : <CategoriesList />}
            </Container>
        </>
        );
    };
    
    export default Home;
