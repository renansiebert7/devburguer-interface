import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const userData = localStorage.getItem('devburguer:userData');

        return userData ? JSON.parse(userData) : {};
    });

    const putUserData = (userInfo) => {
        setUser(userInfo);

        localStorage.setItem(
            'devburguer:userData',
            JSON.stringify(userInfo)
        );
    };

    const logout = () => {
        setUser({});
        localStorage.removeItem('devburguer:userData');
    };

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem('devburguer:userData');

        if (userInfoLocalStorage) {
            setUser(JSON.parse(userInfoLocalStorage));
        }
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                putUserData,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export function useUser() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
}