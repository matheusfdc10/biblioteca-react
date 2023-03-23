import { FooterStyled } from "./style";

const Footer = () => {
    return (
        <FooterStyled>
            <div>
                <span>Copyright © 2021 Árvore. Todos os direitos reservados.</span>
                <div>
                    <button>Política de privacidade</button>
                    <button>Ajuda</button>
                </div>
            </div>
        </FooterStyled>
    )
}

export default Footer;