import { Container, Navigation, HeaderLink, Options, Profile, Logout, LinkContainer, Content } from './styles.js'
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext.jsx';

import { UserCircle, ShoppingCart } from '@phosphor-icons/react'
import { Link } from "react-router-dom";

export function Header() {
    const navigate = useNavigate();
    const { user, logout, userInfo } = useUser();

    const { pathname } = useResolvedPath();

    function logoutUser() {
        logout();
        navigate('/login');
    }

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to="/" $isActive={pathname === '/'}>
                            Home
                        </HeaderLink>
                        <hr></hr>
                        <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircle color="#000000" size={24} />
                        <div className="user-info">
                            <p>Olá, <span>{user.name}</span></p>
                            <Logout className="mobile-logout" onClick={logoutUser}>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <HeaderLink to="/carrinho">
                            <ShoppingCart color="#000000" size={24} />
                            <span className="cart-text">Carrinho</span>
                        </HeaderLink>
                    </LinkContainer>
                </Options>

            </Content>
        </Container>
    )
}