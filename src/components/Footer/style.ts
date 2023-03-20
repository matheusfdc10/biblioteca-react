import styled from "styled-components";

export const FooterStyled = styled.footer`
    height: 70px;
    width: 100%;
    border-top: 0.5px solid #D9D9D9;
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 72px;
    padding: 0 81px;

    > span {
        font-size: 12.8px;
        font-weight: 500;
        color: #B2B4B9;
    }

    > div {
        display: flex;
        gap: 12px;

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
`