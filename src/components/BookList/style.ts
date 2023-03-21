import styled from "styled-components";

export const BookListStyled = styled.div`
    flex: 1;

    > p {
        font-size: 16px;
        font-weight: 600;
    }

    > .container {
        margin-top: 28px;
        display: flex;
        flex-wrap: wrap;
        gap: 28px;

        > div {
            max-width: 124px;
            width: 100%;
            cursor: pointer;

            /* @media (max-width: 644px) {
                width: 100px;
            } */

            > img {
                height: 185px;
                max-width: 124px;
                width: 100%;
                box-shadow: 0px 8px 10px 1px rgba(5, 59, 75, 0.06);
                border-radius: 6px 12px 12px;

                /* @media (max-width: 644px) {
                    max-width: 100px;
                    height: calc(185px - 24px);
                } */
            }

            > div { 
                height: 185px;
                max-width: 124px;
                width: 100%;
                box-shadow: 0px 8px 10px 1px rgba(5, 59, 75, 0.06);
                border-radius: 6px 12px 12px;
                background-color: #E8FFFC;
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-bottom: 8px;

                /* @media (max-width: 644px) {
                    max-width: 100px;
                    height: calc(185px - 24px);
                } */
                
                > span {
                    text-align: center;
                    bottom: 0;
                    font-size: 16px;
                    font-weight: 600;
                }
            }

            > .title {
                font-size: 12px;
                font-weight: 600;
                line-height: 100%;
                word-break: normal;
                margin-top: 4px;
            }

            > .publisher {
                color: #999999;
                font-weight: 400;
                font-size: 10px;
                word-break: normal;
                margin-top: 6px;
            }
        }
    }
`