import styled from "styled-components";

export const BookShelfStyled = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 47px;

    @media (max-width: 744px) {
        padding-top: 18px;
        padding-bottom: 23px;
    }

    > div {
        max-width: 1163px;
        margin: 0 10%;
        @media (max-width: 743px) {
            margin: 0;
        }

        overflow: hidden;
        /* overflow-x: auto; */


        > h1 {
            font-weight: 600;
            font-size: 16px;
            line-height: 100%;
            padding-bottom: 30px;
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

            /* ::-webkit-scrollbar { 
                display: none;
            } */

            :last-child {
                padding-left: 22px;
                padding-right: 22px;

                @media (min-width: 744px) {
                    padding: 0;
                }
            }

            >   a {
                text-decoration: none;
                height: 296px;
                width: 198px;
                border-radius: 10px 20px 20px 10px;
                background-color: #E8FFFC;

                @media (max-width: 744px) {
                    height: 185px;
                    width: 124px;
                }

                @media (max-width: 320px) {
                    height: 85px ;
                    width: 57px;
                }

                > img { 
                    height: 296px;
                    width: 198px;
                    box-shadow: 0px 8px 10px 1px rgba(5, 59, 75, 0.06);
                    border-radius: 6px 12px 12px;
                    background-color: #E8FFFC;

                    @media (max-width: 744px) {
                        height: 185px;
                        width: 124px;
                    }

                    @media (max-width: 320px) {
                        height: 85px ;
                        width: 57px;
                    }
                }

                > div { 
                    height: 296px;
                    width: 198px;
                    box-shadow: 0px 8px 10px 1px rgba(5, 59, 75, 0.06);
                    border-radius: 6px 12px 12px;
                    background-color: #E8FFFC;
                    display: flex;
                    flex-direction: column;
                    justify-content: end;
                    padding-bottom: 27px;

                    @media (max-width: 744px) {
                        height: 185px;
                        width: 124px;
                    }

                    @media (max-width: 320px) {
                        height: 85px;
                        width: 57px;
                        padding-bottom: 13px;
                    }

                    
                    > span {
                        text-align: center;
                        bottom: 0;
                        font-size: 16px;
                        font-weight: 600;
                        color: black;

                        @media (max-width: 320px) {
                            font-size: 8px;
                        }
                    }
                }
            }
        }
    }
`