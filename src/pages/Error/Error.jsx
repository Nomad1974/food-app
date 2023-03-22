import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Transitions from "../../components/Transition";
import "./error.scss";

const Error = () => {
    return (  
        <Transitions>
            <Header />
                <main className="error">
                </main>
            <Footer />
        </Transitions>
    );
}

export default Error;