import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1280px; /* Alerta: Impede o carrossel de esticar infinitamente no PC */
    margin: 0 auto;    /* Centraliza o bloco inteiro na tela do computador */
    
    .carousel-item {
        padding-right: 40px; /* Mantém um espaçamento elegante entre os cards no PC */
    }

    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }

    padding-left: 40px;
    padding-bottom: 40px;

    @media (max-width: 768px) {
        padding-left: 15px; 
        padding-bottom: 20px;

        .carousel-item {
            padding-right: 15px; /* Mantém o ajuste que salvou seu mobile */
        }
    }
`;

export const Title = styled.h2`
    font-size: 32px ;
    font-weight: 800;
    color: #61A120;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 80px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: calc(50% - 28px);
        width: 56px;
        height: 4px;
        background-color: #61A120;
    }

    @media (max-width: 768px) {
        font-size: 24px; 
        margin-top: 25px;
        margin-bottom: 40px; 
    }
`;
