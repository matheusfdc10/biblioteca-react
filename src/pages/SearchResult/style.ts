import styled from "styled-components";

export const SearchResultStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 36px;
    padding-bottom: 47px;

    > div {
        display: flex;
        gap: 10%;
        overflow: hidden;
        margin: 0 6%;
        /* @media (max-width: 744px) {
            margin: 0;
        } */

    }
`