import axios from "axios";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { auth } from "./firebaseConfig";

type CustomerContextData = {
    Auth: (email: string, password: string) => Promise<void>;
    user: {}
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setUser: (user: boolean) => void;
    setPassword: (password: string) => void;
    SignOut: () => Promise<void>;
}

export const CustomerContext = createContext<CustomerContextData>({} as CustomerContextData);

type IProps = { children: React.ReactNode  };

export const CustomerProvider: React.FC<IProps> = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const SignOut = useCallback(() => signOut(auth), []);
    const Auth = async (email: string, password: string) => {    
        try{
            const usr = await signInWithEmailAndPassword(auth, email, password);
            const token = (await usr.user.getIdTokenResult()).token;
            axios.get("https://login-client-om32e3yzoa-uc.a.run.app/authentication", {
                    headers: {
                        Authorization: token,
                    }
                }).then((response) => {
                    console.log(response.data, "Deu bom o login");
                }).catch((error) => {
                    console.log(error.data);
                }
            );
        }
        catch(error){
            console.log(error);
        }
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser:any) => {
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      }, []);
    
    return (

        <CustomerContext.Provider value={{ user, email, password, setEmail, setUser, setPassword, Auth, SignOut }}>
            {children}
        </CustomerContext.Provider>
    )
}
export const useCustomerProvider = () => useContext(CustomerContext);




