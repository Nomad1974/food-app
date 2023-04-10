import { useSelector } from 'react-redux';
import { selectAllCategories } from '../../features/categoryList/categoryListSlice';

const useHome = () => {
    const { status, error } = useSelector(selectAllCategories);

    return [status, error];
}

export default useHome;