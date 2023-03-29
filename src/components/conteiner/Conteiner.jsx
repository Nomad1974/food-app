import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ScrollButton } from '../../icons/up.svg';
import { setVisible } from './containerSlice';

import Transitions from "../../features/Transition";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./conteiner.scss";

const Container = ({children}) => {
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

    window.addEventListener('scroll', toggleVisible);

    return ( 
        <Transitions>
            <div className="wrapper">
                <Header />
                    <main className="content">
                        {children}
                    </main>
                    {visible && (
                                <ScrollButton
                                    className="pageUp"
                                    onClick={scrollToTop}
                                />
                            )}
                <Footer/>
            </div>
        </Transitions>
    );
}

export default Container;