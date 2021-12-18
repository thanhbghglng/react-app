import { Navigate } from "react-router-dom";
import { isAuthenticate } from "../authenticate";
const PrivateAdmin = ({children}) =>{
    const auth = isAuthenticate();
    console.log(auth.id);
    if(!auth || auth.id!=1){
        return <Navigate to="/signin" />;
    }
    return children;
}
export default PrivateAdmin;