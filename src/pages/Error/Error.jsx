import Transitions from "../../features/Transition";
import "./error.scss";

const Error = () => {
    return (  
        <Transitions>
                <main className="error">
                    <span className="error_wrapper">
                        <h1 className="error_message"> The page is not found!!!</h1>
                    </span>
                </main>  
        </Transitions>
    );
}

export default Error;