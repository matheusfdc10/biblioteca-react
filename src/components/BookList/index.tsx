import { BookListStyled } from "./style";
import { ReactNode, useEffect, useRef, useState } from 'react'
import axios from "axios";
import Loading from "../Loading";

type BookListProps = {
    search: string,
    children?: ReactNode
};

type booksProps = {
    volumeInfo: {
        title: string,
        publisher: string,
        previewLink: string,
        imageLinks: {
            thumbnail: string
        }
    }
}[];

const BookList = ({ search, children}: BookListProps) => {
    const [books, setBooks] = useState<booksProps>([])
    const [startIndex, setStartIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const divInfiniteScrollRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        setBooks((old) => old = [])
        setStartIndex((index) => index = 0)

        window.scrollTo({
            top: 0,
            behavior: "auto",
        })
    }, [search])

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${startIndex}&maxResults=40`)
            .then(response => response.data)
            .then(data => {
                if(data.items){
                    setBooks([...books, ...data.items])
                } else {
                    setLoading(!Loading)
                }
            })
            .catch(() => alert(`Erro ao buscar por ${search}, tente novamente`))
    }, [startIndex])

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            const ratio = entry.intersectionRatio;

            if(ratio > 0) {
                setStartIndex((oldIndex) => oldIndex + 40)
            }
        })

        if(divInfiniteScrollRef.current){
            intersectionObserver.observe(divInfiniteScrollRef.current)
        }

        return () => {
            intersectionObserver.disconnect();
        }
    }, [books.length, divInfiniteScrollRef])
    
    return (
        <BookListStyled>
            <div className="container">
                {books.map((book,i) => (
                    <a key={i} title={book.volumeInfo.title} href={book.volumeInfo.previewLink} target="_blank">
                        {book.volumeInfo.imageLinks?.thumbnail ?
                            <img  
                                src={book.volumeInfo.imageLinks?.thumbnail} 
                                alt={book.volumeInfo.title}
                            />
                            :
                            <div title={book.volumeInfo.title}>
                                <span>Sem Capa</span>
                            </div>
                        }
                        <p className="title">{book.volumeInfo.title}</p>
                        <p className="publisher">{book.volumeInfo?.publisher}</p>
                    </a>
                ))}
            </div>
            <div ref={divInfiniteScrollRef}>
                {loading ? <Loading /> : null}
            </div>
        </BookListStyled>
    )
}

export default BookList;