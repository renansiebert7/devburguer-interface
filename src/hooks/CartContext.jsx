import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({

});

export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);

    const putProductInCart = (product) => {
        /* 
        Regras de Negócio:

        - Se o produto já existir no carrinho, deve-se aumentar a quantidade em 1.
        - Se o produto não existir no carrinho, deve-se adicioná-lo com a quantidade inicial de 1.
        */

        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

        let newCartProductsInCart = [];
        if (cartIndex >= 0) {
            newCartProductsInCart = cartProducts;

            newCartProductsInCart[cartIndex].quantity = newCartProductsInCart[cartIndex].quantity + 1;

            setCartProducts(newCartProductsInCart);
        } else {
            product.quantity = 1;
            newCartProductsInCart = [...cartProducts, product];
            setCartProducts(newCartProductsInCart);
        }

    updateLocalStorage(newCartProductsInCart);
    };

    const clearCart = () => {
        setCartProducts([]);
        updateLocalStorage([]);
    };

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId);

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map((prd) => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
        });
        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    const decreaseProduct = (productId) => {
        /* 
        Encontrar o produto no carrinho e diminuir a quantidade em 1. 
        Se a quantidade for igual a 1 de quantity deve-se remover ou não fazer nada, dependendo da regra de negócio que você escolher.
        */
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) => {
                return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd;
            });
            setCartProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            deleteProduct(productId);
        }
    };

    const updateLocalStorage = (products) => {
        localStorage.setItem("devburguer:cartInfo", JSON.stringify(products));
    };

    useEffect(() => {
        const clientCartData = localStorage.getItem("devburguer:cartInfo");

        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }
    }, []);

    return (
        <CartContext.Provider value={{ cartProducts, putProductInCart, clearCart, deleteProduct, increaseProduct, decreaseProduct }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a context");
    }

    return context;
}