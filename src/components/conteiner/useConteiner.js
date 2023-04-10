import { useDispatch, useSelector } from 'react-redux';
import { setVisible } from './containerSlice';


const useConteiner = () => {
    const dispatch = useDispatch();
    const visible = useSelector((state) => state.visible);

    const toggleVisible = () => {

        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 700) {
            dispatch(setVisible(true));
        } else if (scrolled <= 700) {
            dispatch(setVisible(false));
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    return [visible, toggleVisible, scrollToTop];
}

export default useConteiner;