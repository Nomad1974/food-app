import useConteiner from './useConteiner';

import { ReactComponent as ScrollButton } from '../../icons/up.svg';

import Transitions from "../../features/Transition";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./conteiner.scss";

const Container = ({children}) => {
    const [visible, toggleVisible, scrollToTop] = useConteiner();

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