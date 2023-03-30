import { ReactComponent as ReturnIcon } from "../../icons/up.svg";
import useReturn from "../../features/useReturn";

import "./returnButton.scss";

const ReturnButton = () => {
    const [goBack] = useReturn();
    return (  
        <>
            <ReturnIcon className="return-button" onClick={goBack}/>
        </>
    );
}

export default ReturnButton;