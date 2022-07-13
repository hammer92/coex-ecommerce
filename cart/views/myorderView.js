import '../component/cartProdComponent.js';

const ImageUrl = 'https://image.tmdb.org/t/p/w500';
const IconSrc = '../../assets/icons';

const TAGS = [];

const ORDER_DATE = '13.07.2022';

const MOVIES = [
	{
		title: 'Saw',
		genre: 'Thriller',
		poster_path: '/harQifr8kpIVqlLP41kTR058LZB.jpg',
		vote_average: 7.4,
	},
	{
		title: 'Avengers: Endgame',
		genre: 'Action',
		poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
		vote_average: 8.3,
	},
	{
		title: 'Joker',
		genre: 'Action',
		poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
		vote_average: 8.2,
	},
];

MOVIES.forEach((movie) => {
	TAGS.push(
		`<cart-product title="${movie.title}" genre="${movie.genre}" cover="${ImageUrl}${movie.poster_path}" rating="${movie.vote_average}"></cart-product>`
	);
});
const MoviesTag = TAGS.join('');

// const LINK_BACK = `
// <a href="../../cart/index.html" class="icon-arrow" type="button">
//     <img src="${IconSrc}/back-arrow-comb-white.svg" alt="back-arrow" class="icon">
// </a>
// `;

const BTN_BACK = `
<button id="back-arrow" class="icon-arrow" type="button">
    <img src="${IconSrc}/back-arrow-comb-white.svg" alt="back-arrow" class="icon">
</button>
`;

const myorderView = `
<div class="myorder-view">
    <header class="topbar">
        <a href="../../index.html" class="topbar__link" type="button">
            <img src="${IconSrc}/logo_coexbuster.svg" alt="logo_coexbuster" class="logo">
        </a>
		
    </header>
    <main class="myorder-container">
        ${BTN_BACK}
        <section class="order">
            <h1 class="order__title">My order</h1>
            <div class="order__info">
                <h2 class="info__date">${ORDER_DATE}</h2>
                <h3 class="info__articles">${MOVIES.length} movies</h3>
            </div>
            <div class="order__list">
                ${MoviesTag}
            </div>
        </section>
    </main>
</div>
`;

export default myorderView;
