import styled from "styled-components";

export const SearchResultStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 36px;
    padding-bottom: 47px;

    > div {
        display: flex;
        justify-content: center;
        gap: 10%;
        overflow: hidden;
        margin: 0 10%;

        @media (max-width: 644px) {
            margin: 0 16px;
        }

    }
`