import { useDispatch, useSelector } from 'react-redux';

import { selectSearch } from '../search/searchSlice';

const useHeader = () => {
    const dispatch = useDispatch();
    const {clearControls} = useSelector(selectSearch);

    const cleanUp = () => dispatch(clearControls());

    return [cleanUp];
}

export default useHeader;