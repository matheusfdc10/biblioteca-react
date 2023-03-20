import { FooterStyled } from "./style";

const Footer = () => {
    return (
        <FooterStyled>
            <span>Copyright © 2021 Árvore. Todos os direitos reservados.</span>
            <div>
                <button>Política de privacidade</button>
                <button>Ajuda</button>
            </div>
        </FooterStyled>
    )
}

export default Footer;