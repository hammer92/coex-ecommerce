const ApiKey = 'dde722cb807472090076a60be85c0010';
const URL = 'https://api.themoviedb.org/3';

const GetUrl = (Path, Search) => {
	const sParams = new URLSearchParams();
	sParams.set('api_key', ApiKey);
	Object.keys(Search || {}).map((key) => {
		sParams.set(key, Search[keys]);
	});
	return `${URL}/${Path}?${sParams.toString()}`;
};

export async function GetCategories() {
	const Url = GetUrl('/genre/movie/list');
	return fetch(Url).then((res) => res.json());
}
