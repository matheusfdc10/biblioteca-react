import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookList from "../../components/BookList";
import Filter from "../../components/Filter";
import { SearchResultStyled } from "./style";

type booksProps = {
    volumeInfo: {
        title: string,
        publisher: string,
        imageLinks: {
            thumbnail: string
        }
    }
}[];


const SearchResult = () => {
    const {search} = useParams()
    const [books, setBooks] = useState<booksProps>([])

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=0&maxResults=40`)
            .then(response => response.data)
            .then(data => setBooks(data.items))
            .catch(() => alert(`Erro ao buscar por ${search}, tente novamente`))
    }, [search])

    if(!books.length){
        return <></>
    }

    return(
        <SearchResultStyled>
            <div>
                <Filter />
                <BookList books={books} theme={search!}/>
            </div>
        </SearchResultStyled>
    )
}

export default SearchResult;