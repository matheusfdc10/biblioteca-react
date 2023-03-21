import { BookShelfStyled } from "./style";

import { useEffect, useState } from "react";
import axios from 'axios'

type booksProps = {
    volumeInfo: {
        title: string,
        imageLinks: {
            thumbnail: string 
        }
    }
}[];

interface ThemeProps {
    theme: string
}

const BookShelf = ({theme}:ThemeProps) => {
    const [books, setBooks] = useState<booksProps>([])

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${theme}&startIndex=0&maxResults=10`)
            .then(response => response.data)
            .then(data => setBooks(data.items))
            .catch(() => alert(`Erro`))
    }, [])

    if(!books.length) {
        return <></>
    }

    return (
        <BookShelfStyled style={{backgroundColor: theme === 'Destaques' ? '#DAF6F3' : 'none'}}>
            <div>
                <h1 style={theme === 'Destaques' ? {color: '#A977D8', fontSize: '22px'} : {}}>{theme}</h1>
                <div>
                    {books.map((item) => (
                        <div key={item.volumeInfo.title} title={item.volumeInfo.title}>
                            {item.volumeInfo.imageLinks?.thumbnail ?
                                <img  
                                    src={item.volumeInfo.imageLinks?.thumbnail} 
                                    alt={item.volumeInfo.title}
                                />
                                :
                                <div title={item.volumeInfo.title}>
                                    <span>Sem Capa</span>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </BookShelfStyled>
    )
}

export default BookShelf;