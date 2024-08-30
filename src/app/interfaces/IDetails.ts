interface Genre {
    id: number;
    name: string;
}

interface ProductionCompany {
    id: number;
    name: string;
}

interface MovieDetails {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    genres: Genre[];
    production_companies: ProductionCompany[];
    tagline: string;
    runtime: number;
    status: string;
}

export default MovieDetails;