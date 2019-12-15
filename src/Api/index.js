import BASE_URL from './config';
import axios from 'axios';

const apis = {
	loginUser(data) {
		return axios.post(`${BASE_URL}/users/login`, data);
	},
	getItems() {
		return axios.get(`${BASE_URL}/products`);
	},
};

export default apis;
