import Movies from "./movies";

interface HomeInterface {
    trending: Movies;
    upcoming: Movies;
    popular: Movies;
    topRated: Movies;
    nowPlaying: Movies;
}

export default HomeInterface;