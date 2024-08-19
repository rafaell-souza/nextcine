interface Genre {
    id: number;
    name: string;
}

interface MovieDetails {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    release_year: number;
}

interface Movies {
    results: MovieDetails[];
    page: number;
    total_results: number;
    total_pages: number;
}

export default Movies;