import Movies from "./movies";

interface HomeInterface {
    trending: Movies;
    upcoming: Movies;
    popular: Movies;
    topRated: Movies;
}

export default HomeInterface;