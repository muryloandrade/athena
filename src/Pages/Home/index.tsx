import { useCustomerProvider } from "../../common/firebase/AuthContext";
import "./style.scss";


export const Home = () => {
    const { SignOut } = useCustomerProvider();

    return (
        <div className="home">
            <h1>Home</h1>
            <button onClick={SignOut}>Logout</button>
        </div>
    );
}