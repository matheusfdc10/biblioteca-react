import BookShelf from "../../components/BookShelf";

const themes = ['Aventura', 'Ação', 'Destaques', 'Infantil']

const Home = () => {


    return(
        <>
            {themes.map(item => (
                <BookShelf key={item} theme={item}/>
            ))}
        </>
    )
}

export default Home;