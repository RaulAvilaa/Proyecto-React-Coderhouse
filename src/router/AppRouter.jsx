import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Navbar/Footer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import CartView from "../components/CartView/CartView"
import Checkout from "../components/Checkout/Checkout"
import LoginScreen from "../components/LoginScreen/LoginScreen"
import Contacto from "../components/Contacto/Contacto"


const AppRouter = () => {
    const { user } = useContext(UserContext)

    return (
        <>
            <BrowserRouter>
                <div className="flex flex-col min-h-screen">
                    <Navbar />

                    <div className="flex-grow">
                        {user.logged ? (
                            <Routes>
                                <Route path="/" element={<ItemListContainer />} />
                                <Route path="/productos/:categoryId" element={<ItemListContainer />} />
                                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                                <Route path="/cart" element={<CartView />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path="/productos/Contacto" element={<Contacto />} />


                                <Route path="*" element={<Navigate to={"/"} />} />
                            </Routes>

                        ) : (
                            <Routes>
                                <Route path="/login" element={<LoginScreen />} />
                                <Route path="*" element={<Navigate to="/login" />} />
                            </Routes>
                        )}
                    </div>
                    <Footer />
                </div>
            </BrowserRouter >

        </>
    );
};

export default AppRouter