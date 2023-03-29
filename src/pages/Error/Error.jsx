import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Transitions from "../../features/Transition";
import "./error.scss";

const Error = () => {
    return (  
        <Transitions>
                <main className="error">
                    <span className="error_wrapper">
                        <h1 className="error_message"> Страница не найдена!!!</h1>
                    </span>
                </main>
        </Transitions>
    );
}

export default Error;