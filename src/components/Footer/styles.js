import styled from "styled-components";

export const Container = styled.div`
    background-color: #5c2669;
    height: 50px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: #fff;
        font-size: 14px;
        font-weight: lighter;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 16px;
    }
`;