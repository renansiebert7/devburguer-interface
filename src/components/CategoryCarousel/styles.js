import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    .carousel-item {
    padding-right: 12px;
    }

    padding: 0 12px;
    margin-bottom: 50px;
    cursor: grab;
`;

export const Title = styled.h2`
    font-size: 32px ;
    font-weight: 800;
    color: #9758a6;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 20px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: calc(50% - 28px);
        width: 56px;
        height: 4px;
        background-color: #9758a6;
    }

    @media (max-width: 768px) {
        font-size: 24px; 
        margin-bottom: 25px; 
        margin-top: 15px;
    }
`;

export const ContainerItems = styled.div`
    background: url('${props => props.imageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 250px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        height: 220px;
        padding: 15px 5px;
        justify-content: center;
    }
`;

export const CategoryButton = styled(Link)`
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: bold;
    text-align: center;
    width: max-content;
    max-width: 90%;
    text-decoration: none;
    
    &:hover {
        background-color: #9758a6;
    }

    @media (max-width: 768px) {
        font-size: 15px;
        padding: 8px 14px;
    }
`;
