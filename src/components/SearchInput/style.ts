import styled from "styled-components";

export const SearchInputStyled = styled.div`
    flex: 1;
        height: 35px;
        background: #F1F7FC;
        border: 1px solid #DEE1E6;
        border-radius: 20px;
        display: flex;
        align-items: center;

        > input {
            flex: 1;
            border: 0;
            outline: 0;
            background-color: transparent;
            margin-left: 10px;
            height: 100%;
        }

        > svg {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            margin-top: 4px;
        }
`