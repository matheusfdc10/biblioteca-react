import styled from 'styled-components'


export const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    background-color: #FFFFFF;
    width: 100%;
    height: 70px;
    padding: 0 24px;
    box-shadow: 0px 4px 5px rgba(5, 59, 75, 0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 57px;

    @media (max-width: 743px) {
        box-shadow: none;
        border-bottom: 1px solid #F1F7FC;
    }

    > img {
        width: 140px;
        height: 30px;
        cursor: pointer;
    }

    > .SearchInput {
        @media (max-width: 743px) {
            display: none;
        }
    }


    > .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;

        > div {
            cursor: pointer;
            @media (min-width: 745px) {
                display: none;
            }

            > .active {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: red;
                margin-left: 15px;
                margin-bottom: -9px;
            }

            > svg {
                width: 24px;
                height: 24px;
            }
        }

        /* @media (max-width: 744px) {
            flex-direction: row-reverse;
        } */
        

        > img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }

        > button {
            height: 40px;
            font-weight: 700;
            color: #406A76;
            background-color: transparent;
            font-size: 16px;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 4px;

            @media (max-width: 744px) {
                display: none;
            }

            > svg {
                height: 24px;
                width: 24px;
            }
        }
    }
`

export const InputMobile = styled.div`
    padding: 20px;

    @media (min-width: 744px) {
        display: none;
    }
`