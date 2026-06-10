import { createBrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "../src/layout/AdminLayout";
import { Home, Login, Register, Menu, Cart, CompletePayment, Checkout, Orders, NewProduct, EditProduct, Products } from "../src/containers";
import { UserLayout } from "../src/layout/UserLayout";

export function Router() {
    return (
        <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />

            <Route element={<PrivateRoute />}>
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<Home />} />
                    <Route path="cardapio" element={<Menu />} />
                    <Route path="carrinho" element={<Cart />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="complete-payment" element={<CompletePayment />} />
                </Route>

                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="pedidos" element={<Orders />} />
                    <Route path="novo-produto" element={<NewProduct />} />
                    <Route path="editar-produto" element={<EditProduct />} />
                    <Route path="produtos" element={<Products />} />
                </Route>
            </Route>

        </Routes>
    );
}
