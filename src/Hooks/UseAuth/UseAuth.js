import { useContext } from "react"
import { authContext } from "../../UseContext/AuthProvider"

const useAuth=()=>{
    return useContext(authContext);
}
export default useAuth;