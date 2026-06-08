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
    min-height: 280px; /* Garante uma altura mínima para manter os cards alinhados */
    cursor: grab;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px; /* Deixei a sombra um pouco mais suave */
    position: relative;
    margin-top: 50px; /* Cria o espaço necessário no topo para a imagem absoluta respirar */
    box-sizing: border-box;
    justify-content: space-between; /* Empurra o botão da sacola sempre para o final do card */

    div {
        width: 100%;
        /* REMOVIDO: height: 80px fixo foi embora */
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 10px;
        text-align: center; /* Centraliza melhor os textos do produto */

        p {
            font-size: 18px;
            color: #FF8C05;
            line-height: 1.3;
            font-weight: 700;
            margin-top: 50px; /* Mantém o espaço para a imagem flutuante */
            
            /* Evita que nomes gigantes destruam o layout */
            display: -webkit-box;
            -webkit-line-clamp: 2; /* Limita em até 2 linhas */
            -webkit-box-orient: vertical;
            overflow: hidden;
            min-height: 46px; /* Mantém o mesmo alinhamento mesmo para nomes de uma linha só */
        }

        strong {
            font-size: 22px; /* Reduzido levemente de 24px para encaixar melhor no mobile */
            color: #363636;
            font-weight: 800;
            line-height: 1.2;
        }
    }

    @media (max-width: 480px) {
        padding: 15px 10px;
        min-height: 250px;

        div {
            p {
                font-size: 15px; /* Fonte menor para telas de celulares pequenos */
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
    width: 100px; /* Definir largura fixa junto com a altura evita distorções */
    object-fit: cover;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px); /* Garante que a imagem fique perfeitamente centralizada na horizontal */
    border-radius: 50%; /* Garante um círculo perfeito */
`;