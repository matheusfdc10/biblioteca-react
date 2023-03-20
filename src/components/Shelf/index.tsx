import { ShelfStyled } from "./style";
import logo from './image.jpg'

import { useEffect, useState } from "react";
import axios from 'axios'

type booksPropsss = {
    title: string,
    items: {
        image: string
    }[]
}

const teste:booksPropsss = {
    title: 'Aventura',
    items: [
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
        {
            image: logo
        },
    ]
}

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

const Shelf = ({theme}:ThemeProps) => {
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
        <ShelfStyled>
            <div>
                <h1>{theme}</h1>
                <div>
                    {books.map((item) => (
                        <>
                            {item.volumeInfo.imageLinks?.thumbnail ?
                                <img 
                                    key={item.volumeInfo.title} 
                                    src={item.volumeInfo.imageLinks?.thumbnail} 
                                    alt={item.volumeInfo.title}
                                    title={item.volumeInfo.title}
                                />
                                :
                                <div key={item.volumeInfo.title} title={item.volumeInfo.title}>
                                    Sem capa
                                </div>
                            }
                        </>
                    ))}
                </div>
            </div>
        </ShelfStyled>
    )
}

export default Shelf;