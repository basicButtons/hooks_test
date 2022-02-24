import {ReactNode} from "react"
import {AuthProvide} from "./auth-context"
const AppProvider = ({children}:{children:ReactNode})=>{
    return (
        <AuthProvide>
            {children}
        </AuthProvide>
    )
    
}
export default AppProvider