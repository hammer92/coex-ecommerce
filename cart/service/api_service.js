const Api_key = 'dde722cb807472090076a60be85c0010';
const URL = 'https://api.themoviedb.org/3';

const getUrl = (ruta) =>{
    const nuevaUrl = new URLSearchParams();
    nuevaUrl.set('api_key', Api_key);
    console.log(`${URL}/${ruta}?${nuevaUrl.toString()}`)
    return `${URL}/${ruta}?${nuevaUrl.toString()}`
}

export async function getInfo(id){
    const url = getUrl(`movie/${id}`);
    const response = await fetch(url).then(res => res.json());
    return {name:response.title
            ,rate: response.vote_average,
            genres: response.genres[0].name,
            image: 'https://image.tmdb.org/t/p/w500' +response.backdrop_path}
}


export async function getRecommended(id){
    const url = getUrl(`movie/${id}/recommendations`);
    return fetch(url).then(res => res.json()).then(value  => value.results);
}

