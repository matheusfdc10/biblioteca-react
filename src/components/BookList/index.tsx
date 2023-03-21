import { BookListStyled } from "./style";

type BookListProps = {
    books: {
        volumeInfo: {
            title: string,
            publisher: string,
            imageLinks: {
                thumbnail: string
            }
        }
    }[];
    theme: string
};

const BookList = ({books, theme}: BookListProps) => {
    
    return (
        <BookListStyled>
            <p>Resultados para "{theme}":</p>
            <div>
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
        </BookListStyled>
    )
}

export default BookList;