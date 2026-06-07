import styled from "styled-components"
import banner from "../../assets/hamburguer-banner.svg"
import Background from "../../assets/background.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;

    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url(${Background});

`

export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 480px;
    width: 100%;
    background-color: #1f1f1f;
    background: url('${banner}') no-repeat;
    background-position: center;
    background-size: cover;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        columns: #fff;
        position: absolute;
        color: #fff;
        top: 20%;
        right: 20%;
    }

    span {
        display: block;
        color: #fff;
        font-size: 20px;
    }
`

export const CategoryMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 20px;
    width: 100%;
    max-width: 1280px;
    margin-top: 30px; 

    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 20px;
    }
`

export const CategoryButton = styled(Link)`
    color: #fff;
    background-color: rgba(0,0,0,0.55);

    border-radius: 30px;
    text-decoration: none;

    padding: 10px 14px;

    max-width: 90%;

    text-align: center;

    font-size: 18px;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;

    word-break: break-word;

    @media (max-width: 768px) {
        font-size: 16px;
        padding: 8px 12px;
    }

    &:hover {
        background-color: #9758a6;
    }
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    padding: 40px;
    margin: 50px auto 0;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 20px;
    }
`

