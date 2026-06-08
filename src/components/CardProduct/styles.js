import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 20px 20px 20px;
    border-radius: 15px;
    background-color: #fff;
    
    width: 220px;
    min-height: 340px;
    margin: 60px auto 0 auto;
    
    cursor: grab;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    position: relative;
    box-sizing: border-box;
    justify-content: flex-start; 

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 6px; 
        flex-grow: 1; 

        p {
            font-size: 18px;
            color: #FF8C05;
            line-height: 1.3;
            font-weight: 700;
            margin-top: 65px; 
            margin-bottom: 5px; 
            
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
            margin-top: auto; 
            margin-bottom: 15px; 
        }
    }

    @media (max-width: 480px) {
        width: 100%;
        min-height: 260px;
        padding: 15px 10px;
        margin-top: 50px;

        div {
            gap: 4px;

            p {
                font-size: 15px;
                margin-top: 45px;
                min-height: 40px;
                margin-bottom: 2px;
            }

            strong {
                font-size: 19px;
                margin-top: auto;
                margin-bottom: 8px; 
            }
        }
    }
`;

export const CardImage = styled.img`
    height: 130px;
    width: 130px; 
    object-fit: cover;
    position: absolute;
    top: -65px; 
    left: calc(50% - 65px); 
    border-radius: 50%;

    @media (max-width: 480px) {
        height: 100px;
        width: 100px;
        top: -50px;
        left: calc(50% - 50px);
    }
`;

export const CardButton = styled.button`
    width: 100%;
`;