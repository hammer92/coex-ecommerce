import '../component/cartProdComponent.js';

const ImageUrl = 'https://image.tmdb.org/t/p/w500';
const IconSrc = '../../assets/icons';

const TAGS = [];

// const ORDER_DATE = '13.07.2022';

function getData(data){

	data.forEach((movie) => {
		TAGS.push(
			`<cart-product title="${movie.title}" genre="${movie.genre}" cover="${ImageUrl}${movie.poster_path}" rating="${movie.vote_average}"></cart-product>`
		);
	});
	const MoviesTag = TAGS.join('');
	return MoviesTag

}

const BTN_BACK = `
<button id="back-arrow" class="icon-arrow" type="button">
    <img src="${IconSrc}/back-arrow-comb-white.svg" alt="back-arrow" class="icon">
</button>
`;

function OrderList( data, date) {
	const movies = getData(data)
	this.myorderView = `
	<div class="myorder-view">
		<header class="topbar">
			<a href="../shop/index.html" class="topbar__link" type="button">
				<img src="${IconSrc}/logo_coexbuster.svg" alt="logo_coexbuster" class="logo">
			</a>
		</header>
		<main class="myorder-container">
			${BTN_BACK}
			<section class="order">
				<h1 class="order__title">My order</h1>
				<div class="order__info">
					<h2 class="info__date">${date}</h2>
					<h3 class="info__articles">${data.length} movies</h3>
				</div>
				<div class="order__list">
					${movies}
				</div>
			</section>
		</main>
	</div>
	`;
}
export { OrderList };
