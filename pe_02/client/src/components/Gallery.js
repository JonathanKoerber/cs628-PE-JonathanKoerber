import React, {useEffect} from 'react';
import data from "../data/movie_data";
import Card from "./Card";

const Gallery = () => {
    const [loading, setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState([]);
    const [genre, setGenres] = React.useState([]);
    const [selectedGenre, setSelectedGenre] = React.useState("All");

    useEffect(() => {
        const uniqueGenres = ["All", ...new Set(data.map(item => item.genre))];
        setGenres(uniqueGenres);
        setMovies(data)
        setLoading(false)
       }, []);

    useEffect(() =>{
       if(selectedGenre === "All") {
           setMovies(data)
       }else {
           const moviesByGenre = data.filter(item => item.genre === selectedGenre);
           setMovies(moviesByGenre);
       }
    }, [selectedGenre])

     const handleSelectGenres = (event) => {
            setSelectedGenre(event.target.value);
     }

    return(
        <div className={"galleryContainer"}>
            <h2>Movie List</h2>
            <label htmlFor={"genres"}>Filter by Genre</label>
            <select
                id="genres"
                onChange={handleSelectGenres}
                value={selectedGenre}>
                {genre.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
            <div className={"galleryListContainer"}>
                <>
                { loading ? (
                     <h2>loading... </h2>
                ) : movies.length > 0 ? (
                movies.map((item, index) => (
                    <Card key={index*10}
                          title={item.title}
                          genre={item.genre}
                          releaseYear={item.releaseYear}
                          />
                ))
                ):(
                    <h2>No movies found for this genre.</h2>
                        )
                }
                </>
            </div>
        </div>
    )
}
export default Gallery;