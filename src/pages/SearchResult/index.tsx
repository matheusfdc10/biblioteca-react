import { useParams } from "react-router-dom";
import BookList from "../../components/BookList";
import Filter from "../../components/Filter";
import { SearchResultStyled } from "./style";


const SearchResult = () => {
    const {search} = useParams()

    return(
        <SearchResultStyled>
            <div>
                <Filter />
                <BookList search={search!} />
            </div>
        </SearchResultStyled>
    )
}

export default SearchResult;