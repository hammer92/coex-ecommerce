const LOG = localStorage.getItem('iniciosesion');

const user = {
	email: 'admin@admin.com',
	password: 'admin',
};

const CHECKLOG = () => {
	if (LOG) {
		const SIGIN = document.getElementById('sigin');
		if (LOG === 'false') {
			SIGIN.innerHTML = 'Sig In';
		} else if (LOG === 'true') {
			SIGIN.innerHTML = user.email;
		}
	} else {
		localStorage.setItem('iniciosesion', false);
	}
};
