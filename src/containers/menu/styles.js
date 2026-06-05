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
`

export const CategoryButton = styled(Link)`
    text-decoration: none;
    background: none;
    border-radius: 4px;
    cursor: pointer;
    color: ${(props) => props.$isActiveCategory ? '#9758A6' : '#696969'};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758A6'};
    
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    padding: 40px;
    margin: 50px auto 0;
`

