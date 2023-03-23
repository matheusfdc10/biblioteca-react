import styled from "styled-components";

export const FooterStyled = styled.footer`
    height: 70px;
    width: 100%;
    border-top: 0.5px solid #D9D9D9;
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 743px) {
        padding: 0 20px;
    }

    > div {
        width: 100%;
        max-width: 1680px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 72px;
        padding: 0 81px;

        @media (max-width: 320px) {
            padding: 0 40px;
        }


        > span {
            font-size: 12.8px;
            font-weight: 500;
            color: #B2B4B9;

            @media (max-width: 743px) {
                text-align: center;
            }
        }

        > div {
            display: flex;
            gap: 12px;

            @media (max-width: 743px) {
                display: none;
            }

            > button {
                flex-shrink: 0;
                flex-grow: 0;
                color: #B2B4B9;
                border: 1px solid #B2B4B9;
                border-radius: 10px;    
                padding: 10px 16px 10px 16px;
                background-color: white;
                cursor: pointer;
            }
        }
    }
`