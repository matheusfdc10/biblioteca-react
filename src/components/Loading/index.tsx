import { LoadingStyled } from "./style";

const Loading = () => {
    return (
        <LoadingStyled>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </LoadingStyled>
    )
}

export default Loading;