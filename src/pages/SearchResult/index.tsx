import { useParams } from "react-router-dom";
import BookList from "../../components/BookList";
import Button from "../../components/ButtonFilter";
import Filter from "../../components/Filter";
import { SearchResultStyled } from "./style";


const SearchResult = () => {
    const {search} = useParams()

    return(
        <SearchResultStyled>
            <div>
                <Filter />
                <div className="container">
                    <p>Resultados para "{search}":</p>
                    <Button/>
                    <BookList search={search!}/>
                </div>
            </div>
        </SearchResultStyled>
    )
}

export default SearchResult;