import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 20px;
    border-radius: 8px;
    background-color: #fff;
    
    width: 100%;
    max-width: 280px; 
    margin: 50px auto 0 auto; 
    
    min-height: 320px; 
    cursor: grab;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
    position: relative;
    box-sizing: border-box;
    justify-content: space-between;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 10px;
        text-align: center;

        p {
            font-size: 18px;
            color: #FF8C05;
            line-height: 1.3;
            font-weight: 700;
            margin-top: 50px; 
            
            display: -webkit-box;
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical;
            overflow: hidden;
            min-height: 46px; 
        }

        strong {
            font-size: 22px;
            color: #363636;
            font-weight: 800;
            line-height: 1.2;
        }
    }

    @media (max-width: 480px) {
        max-width: 100%; 
        padding: 15px 10px;
        min-height: 250px;

        div {
            p {
                font-size: 15px;
                margin-top: 45px;
                min-height: 40px;
            }

            strong {
                font-size: 19px;
            }
        }
    }
`;

export const CardImage = styled.img`
    height: 100px;
    width: 100px; 
    object-fit: cover;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px); 
    border-radius: 50%; 
`;