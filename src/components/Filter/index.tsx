import { FilterStyled } from "./style";

const Filter = () => {
    return (
        <FilterStyled>
            <p>Filtrar</p>
            <div>
                <span>Preço</span>
                <div>
                    <div>
                        <input id="0-ate-30" type="checkbox" />
                        <label htmlFor="0-ate-30">de R$ 0 até R$30</label>
                    </div>
                    <div>
                        <input id="31-ate-50" type="checkbox" />
                        <label htmlFor="31-ate-50">de R$ 31 até R$50</label>
                    </div>
                    <div>
                        <input id="51-ate-100" type="checkbox" />
                        <label htmlFor="51-ate-100">de R$ 51 até R$100</label>
                    </div>
                    <div>
                        <input id="mais-100" type="checkbox" />
                        <label htmlFor="mais-100">Mais de R$100</label>
                    </div>
                </div>
            </div>


            

            <div>
                <span>Disponibilidade para venda</span>
                <div>
                    <div>
                        <input id="disponivel" type="checkbox" />
                        <label htmlFor="disponivel">Disponível</label>
                    </div>
                    <div>
                        <input id="indisponivel" type="checkbox" />
                        <label htmlFor="indisponivel">Indisponível</label>
                    </div>
                </div>
            </div>




            <div>
                <span>Formatos disponíveis</span>
                <div>
                    <div>
                        <input id="e-pub" type="checkbox" />
                        <label htmlFor="e-pub">e-pub</label>
                    </div>
                    <div>
                        <input id="pdf" type="checkbox" />
                        <label htmlFor="pdf">PDF</label>
                    </div>
                </div>
            </div>
        </FilterStyled>

        // <button
        // className="filter-btn"
        // style={{width: '100%', backgroundColor: '#8553F4', color: '#FFF', height: '55px', borderRadius: '10px', border: 'none', marginTop: '24px'}}
        // >
        // FILTRAR
        // </button>
    )
}

export default Filter;