import MovieCard from "../components/MovieCard"

function Home(){

    const movies =[
        {id: 1, title:"John Wick", release_date: "2020"},
        {id:2, title:"The wedding", release_date: "2022"},
        {id: 3, title:"Jurassic Park", release_date: "2002"},
        {id: 4, title:"3 idiots", release_date: "2027"},
    ]
    return(
        // <>
        // </>
        <div className="home">
            <div className="movies-grid">
                {movies.map(movie => ( <MovieCard movie={movie} key={movie.id}/>
            ))}
            </div>
        </div>
    )
}

export default Home;