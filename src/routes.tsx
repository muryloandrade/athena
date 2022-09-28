import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Home } from './Pages/Home';
import { useCustomerProvider } from './common/firebase/AuthContext';


const { user } = useCustomerProvider();
const navigate = useNavigate();
const routerPrivate = () => {
    if (user) {
        navigate("/home");
    } else {
        navigate("/");
    }


export default function AppRoutes = () => {

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
            <routerPrivate>
                <Routes>
                    <Route path="/home" element={<Home />} />
                </Routes>
            </routerPrivate>
        </Router>
    );

}

