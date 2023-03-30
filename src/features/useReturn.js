import { useNavigate } from "react-router-dom";

const useReturn = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return [goBack];
}

export default useReturn;