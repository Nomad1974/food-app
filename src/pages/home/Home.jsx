import { Helmet } from 'react-helmet';
import useHome from './useHome';

import CategoriesList from '../../features/categoryList/CategoriesList';
import Search from '../../components/search/Search';
import Error from '../Error/Error';
import Preloader from '../../features/preloader/Preloader';
import Container from '../../components/conteiner/Conteiner';
import './home.scss';

const Home = () => {

    const [status, error] = useHome();

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
