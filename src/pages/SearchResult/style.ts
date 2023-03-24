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

            > div:first-child {
                display: none;
            }
        }

        > div:first-child {
            > button {
                display: none;
            }
        }

        > .on {
            display: block !important;
            padding: 38px 0 0  16px;
            position: fixed;
            background-color: white;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 100;
            overflow: hidden;

            > .on {
                display: block !important;
                position: absolute;
                right: 27px;

                font-size: 16px;
                border: none;
                background-color: transparent;
            }
        }

        > .container {
            flex: 1;
            max-width: 744px;

            display: flex;
            flex-direction: column;
            gap: 10px;

            > p {
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 16px;
            }

            > button {
                @media (min-width: 645px) {
                    display: none;
                }
            }
        }

    }
`