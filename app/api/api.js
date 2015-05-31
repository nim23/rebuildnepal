class Api {
	constructor() {

	if (process.env.BROWSER) {
		this.BASE_URL = '/api';
		return;
	}

	if (process.env.NODE_ENV === 'prod') {
		//TODO: update this when we have a prod environment
		this.BASE_URL = 'http://localhost:10100/api';
		return;
	}

	this.BASE_URL = 'http://localhost:10100/api';
	}
}

export default Api;
