import styled from 'styled-components'


export const HeaderStyled = styled.header`
    background-color: #FFFFFF;
    width: 100%;
    height: 70px;
    padding: 0 24px;
    box-shadow: 0px 4px 5px rgba(5, 59, 75, 0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 57px;

    > img {
        width: 140px;
        height: 30px;
        cursor: pointer;
    }

    > .search-input {
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
        }

        > svg {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            margin-top: 4px;
        }
    }

    > .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;

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

            > svg {
                height: 24px;
                width: 24px;
            }
        }
    }
`