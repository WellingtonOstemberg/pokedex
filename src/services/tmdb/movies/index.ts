import { api_key, language } from "../../api"

export const getMoviesImage = (url?: string | null) => url ? `https://image.tmdb.org/t/p/w500${url}` : '/assets/img/no-image.png'

export const getMoviesTopRated = async (page = 1) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=${language}&page=${page}`)
    const response: any = await request.json()
    return response
}

export const getMoviesPopular = async (page = 1) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=${page}`)
    const response: any = await request.json()
    return response
}
export const getMoviesUpcoming = async (page = 1) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=${language}&page=${page}`)
    const response: any = await request.json()
    return response
}
export const getMovieDetails = async (movie_id: number | undefined) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=${language}`)
    const response: any = await request.json()
    return response
}
export const getMovieCredits = async (movie_id: number | undefined) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${api_key}&language=${language}`)
    const response: any = await request.json()
    return response
}
export const getMoviesSimilars = async (movie_id: number | undefined, page = 1) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${api_key}&language=${language}&page=${page}`)
    const response: any = await request.json()
    return response
}

