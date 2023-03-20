import styled from "styled-components";

export const ShelfStyled = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 89px;

    > div {
        margin: 0 10%;
        @media (max-width: 744px) {
            margin: 0;
        }

        overflow: hidden;
        overflow-x: auto;

        > h1 {
            font-weight: 600;
            font-size: 16px;
            line-height: 100%;
            padding-bottom: 40px;
            margin-left: 22px;

            @media (min-width: 744px) {
                margin: 0;
            }
        }

        > div {
            display: flex;
            gap: 16px;
            width: 100%;

            overflow: hidden;
            overflow-x: auto;

            :last-child {
                padding-left: 22px;
                padding-right: 22px;

                @media (min-width: 744px) {
                    padding: 0;
                }
            }

            > img { 
                height: 296px;
                width: 198px;
                border-radius: 10px 20px 20px 10px;
                background-color: #148175;
            }

            > div {
                height: 296px;
                width: 198px;
                border-radius: 10px 20px 20px 10px;
                background-color: #148175;
            }
        }
    }
`