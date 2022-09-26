import { onAuthStateChanged } from "@firebase/auth";
import { useCallback, useEffect } from "react";
import { useCustomerProvider } from "../../common/firebase/AuthContext";
import { auth } from "../../common/firebase/firebaseConfig";
import "./style.scss";


export function Login() {

    const { email, password, setEmail, setPassword, setUser, Auth } = useCustomerProvider();


    useEffect(() => {
        const AuthCheck = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(false);
          }
        });
        return () => AuthCheck();
      }, [setUser]);

    const Login = useCallback((e:any) => {
        e.preventDefault();
        Auth(email, password);
    }, [Auth, email, password]);
    return (


                <form>
                    <div>
                        <h2 className="title">Athena</h2>
                        <input
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="usuario" />
                        <input
                            placeholder="Senha"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="senha" />

                        <button onClick={Login}>Logar</button>
                    </div>
                </form>

    );

}