// import axios from "axios";
// import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import BookList from "../../components/BookList";
import Filter from "../../components/Filter";
import { SearchResultStyled } from "./style";

// type booksProps = {
//     volumeInfo: {
//         title: string,
//         publisher: string,
//         imageLinks: {
//             thumbnail: string
//         }
//     }
// }[];


const SearchResult = () => {
    const {search} = useParams()
    // const [books, setBooks] = useState<booksProps>([])
    // const [startIndex, setStartIndex] = useState(0)
    // const divInfiniteScrollRef = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     setBooks((old) => old = [])
    //     setStartIndex((index) => index = 0)
    // }, [search])

    // useEffect(() => {
    //     axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${startIndex}&maxResults=40`)
    //         .then(response => response.data)
    //         .then(data => {
    //             if(data.items){
    //                 setBooks([...books, ...data.items])
    //             }
    //         })
    //         .catch(() => alert(`Erro ao buscar por ${search}, tente novamente`))
    // }, [search, startIndex])

    // useEffect(() => {
    //     const intersectionObserver = new IntersectionObserver(([entry]) => {
    //         const ratio = entry.intersectionRatio;

    //         if(ratio > 0) {
    //             setStartIndex((oldIndex) => oldIndex + 40)
    //         }
    //     })

    //     if(divInfiniteScrollRef.current){
    //         intersectionObserver.observe(divInfiniteScrollRef.current)
    //     }

    //     return () => {
    //         intersectionObserver.disconnect();
    //     }
    // }, [books.length, divInfiniteScrollRef])

    // if(!books.length){
    //     return <></>
    // }

    return(
        <>
        <SearchResultStyled>
            <div>
                <Filter />
                <BookList search={search!} />
            </div>
        </SearchResultStyled>
        {/* <div ref={divInfiniteScrollRef}/> */}
        </>
    )
}

export default SearchResult;