import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background-color: ${(props) => props.theme.mainBlack};
    width: 100%;
    height: 72px;
    padding: 0 56px;

    @media (max-width: 768px) {
        padding: 10px 15px;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 72px;

    @media (max-width: 768px) {
        padding: 0;
        gap: 10px;
    }
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    hr {
        height: 24px;
        border: 1px solid #625e5e;
    }

    @media (max-width: 768px) {
        height: auto;
    }
`

export const HeaderLink = styled(Link)`
    color: ${(props) => props.$isActive ? props.theme.purple : props.theme.white};
    border-bottom: ${(props) => props.$isActive ? `1px solid ${props.theme.purple}` : 'none'};
    padding-bottom: 5px;
    text-decoration: none;
    font-size: 14px;
    transition: color 200ms;

    &&:hover {
        color: #9758a6;
    }
`

export const Options = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    @media (max-width: 768px) {
        gap: 12px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    .mobile-logout {
        display: none;
    }

    span {
        color: ${props => props.theme.purple};
    }

    @media (max-width: 768px) {
        svg {
            display: none;
        }

        .user-info {
            display: none;
        }

        .mobile-logout {
            display: block;
            color: #ff3205;
            background: transparent;
            border: none;
            font-weight: 700;
            cursor: pointer;
        }
    }
`;

export const LinkContainer = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: white;

    @media (max-width: 768px) {
        .cart-text {
            display: none;
        }
    }
`;

export const Logout = styled.button`
    color: #ff3205;
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    border: none;
`