import styled from "styled-components";

export const FilterStyled = styled.div`
    
    > p {
        font-size: 18px;
        font-weight: 600;
    }


    > div {
        margin-top: 28px;
        
        > span {
            color: #9EAEB7;
            font-size: 14px;
            font-weight: 600;
        }

        > div {
            > div {
                margin-top: 11px;
                display: flex;
                gap: 10px;
                cursor: pointer;

                > input {
                    width: 15px;
                    height: 15px;
                    cursor: pointer;
                }

                > label {
                    font-size: 14px;
                    color: #053B4B;
                    cursor: pointer;
                }
            }
        }
    }
`