import styled from "styled-components";
import BannerHome from "../../assets/banner-home.svg";
import Background from "../../assets/background.svg";

export const Banner = styled.div`
    background: url(${BannerHome});
    background-size: cover;
    background-position: center;
    height: 480px;
    position: relative;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        color: #f4f4f4;
        position: absolute;
        right: 20%;
        top: 10%;
    }

    @media (max-width: 768px) {
        height: 300px;

        h1 {
            font-size: 42px;
            right: 50%;
            transform: translateX(50%);
            top: 35%;
            text-align: center;
            width: 100%;
        }

        span {
            font-size: 16px;
            margin: 10px 0;
       }
    }
`;

export const Container = styled.section`
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), 
    url(${Background});
`