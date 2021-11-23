//const URL_BASE =  process.env.REACT_API_URL_BASE
//const API_KEY = process.env.REACT_API_API_KEY
const URL_BASE = 'https://api.themoviedb.org/3'
const API_KEY = '8baeb8ea8c4052aa94199ce00d0a2515'

const basicFecth = async (endpoint) => {
    const req = await fetch(`${URL_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: "Originais do Netflix",
                items: await basicFecth(`/discover/tv/?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: "Recomendados para Você",
                items: await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: "Em Alta",
                items: await basicFecth(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: "Ação",
                items: await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: "Comédia",
                items: await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: "Terror",
                items: await basicFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: "Romance",
                items: await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: "Documentários",
                items: await basicFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {}

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await (basicFecth(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)) //filme
                    break;
                case 'tv':
                    info = await (basicFecth(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)) //serie
                    break;
                default:
                    info = null
                    break;
            }
        }
    }
}