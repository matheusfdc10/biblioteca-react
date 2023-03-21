import { BookListStyled } from "./style";
import { ReactNode, useEffect, useRef, useState } from 'react'
import axios from "axios";

type BookListProps = {
    search: string,
    children?: ReactNode
};

type booksProps = {
    volumeInfo: {
        title: string,
        publisher: string,
        imageLinks: {
            thumbnail: string
        }
    }
}[];

const BookList = ({ search, children}: BookListProps) => {
    const [books, setBooks] = useState<booksProps>([])
    const [startIndex, setStartIndex] = useState(0)
    const divInfiniteScrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setBooks((old) => old = [])
        setStartIndex((index) => index = 0)

        window.scrollTo({
            top: 0,
            behavior: "auto"
        })
    }, [search])

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${startIndex}&maxResults=40`)
            .then(response => response.data)
            .then(data => {
                if(data.items){
                    setBooks([...books, ...data.items])
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

    if(!books.length){
        return null
    }
    
    return (
        <>
        <BookListStyled>
            <p>Resultados para "{search}":</p>
            {children}
            <div className="container">
                {books.map((book,i) => (
                    <div key={i} title={book.volumeInfo.title}>
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
                        {/* <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} /> */}
                        <p className="title">{book.volumeInfo.title}</p>
                        <p className="publisher">{book.volumeInfo?.publisher}</p>
                    </div>
                ))}
            </div>
        <div ref={divInfiniteScrollRef}/>
        </BookListStyled>
        </>
    )
}

export default BookList;