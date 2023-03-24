import { useParams } from "react-router-dom";
import { useState } from "react";
import BookList from "../../components/BookList";
import Button from "../../components/ButtonFilter";
import Filter from "../../components/Filter";
import { SearchResultStyled } from "./style";


const SearchResult = () => {
    const {search} = useParams()
    const [openFilter, setOpenFilter] = useState(false)

    return(
        <SearchResultStyled>
            <div>
                <div className={openFilter ? 'on' : ''}>
                    <button onClick={() => setOpenFilter(!openFilter)} className={openFilter ? 'on' : ''}>X</button>
                    <Filter />
                </div>
                <div className="container">
                    <p>Resultados para "{search}":</p>
                    <Button onClick={() => setOpenFilter(!openFilter)}/>
                    <BookList search={search!}/>
                </div>
            </div>
        </SearchResultStyled>
    )
}

export default SearchResult;