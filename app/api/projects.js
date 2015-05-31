'use strict';

import axios from 'axios';
import Api from './Api';

class ProjectsApi extends Api {
	constructor() {
		super();
	}

	/**
	 * Get Projects
	 * @return {Object} Promise
	 */
	getProjects() {
		return axios.get(this.BASE_URL + '/project');
	}

	/**
	 * Post Projects
	 * @return {Object} Promise
	 */
	postProject() {
		return axios.post(this.BASE_URL + '/project');
	}
}

export default ProjectsApi;
