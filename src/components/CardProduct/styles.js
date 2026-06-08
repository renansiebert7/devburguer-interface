import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 25px 20px 20px 20px;
    border-radius: 15px; /* Bordas um pouco mais arredondadas combinam mais */
    background-color: #fff;
    
    /* --- CONFIGURAÇÃO CHAVE PARA O PC --- */
    width: 220px; /* Força o card a ser mais estreito e elegante no desktop */
    min-height: 340px; /* Dá uma excelente proporção vertical */
    margin: 60px auto 0 auto; /* Cria o espaço exato para a imagem maior subir */
    
    cursor: grab;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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
            margin-top: 65px; /* Aumentado para acompanhar o novo tamanho da imagem */
            
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

    /* --- AJUSTE EXCLUSIVO PARA MOBILE --- */
    @media (max-width: 480px) {
        width: 100%; /* No mobile ele volta a se adaptar ao espaço do carrossel */
        min-height: 260px;
        padding: 15px 10px;
        margin-top: 50px;

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
    /* Aumentamos de 100px para 130px para preencher o topo do card no PC */
    height: 130px;
    width: 130px; 
    object-fit: cover;
    position: absolute;
    top: -65px; /* Metade da altura para ficar perfeitamente responsivo para fora */
    left: calc(50% - 65px); /* Centralização matemática perfeita */
    border-radius: 50%;

    @media (max-width: 480px) {
        /* No mobile ela diminui um pouco para não cobrir o card inteiro */
        height: 100px;
        width: 100px;
        top: -50px;
        left: calc(50% - 50px);
    }
`;