import Shelf from "../../components/Shelf";

const themes = ['Aventura', 'Ação', 'Destaque', 'Infantil']

const Home = () => {


    return(
        <>
            {themes.map(item => (
                <Shelf key={item} theme={item}/>
            ))}
        </>
    )
}

export default Home;