/* eslint-disable react-hooks/rules-of-hooks */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CustomerProvider } from './common/firebase/AuthContext';
import PrivateRoute from './common/firebase/privateRoute';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';

export default function App() {
    return (
        <CustomerProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </CustomerProvider>
    );
}



