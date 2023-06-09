import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const VendorContext = createContext();

const VendorProvider = ({children, currentVendor}) => {

    const [loggedIn, setLoggedIn] = useState(currentVendor!==null);
    const navigate= useNavigate();

    const logout = () => {
        sessionStorage.removeItem('vendor');
        setLoggedIn(false);
        navigate('/main/login');
    }

    return <VendorContext.Provider value={{loggedIn, setLoggedIn, logout}}>
        {children}
    </VendorContext.Provider>
}

export const useVendorContext = () => useContext(VendorContext);

export default VendorProvider;
