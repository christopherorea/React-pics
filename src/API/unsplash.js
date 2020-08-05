import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers:{
		Authorization: 'Client-ID FfAVwrDySRq7stH8Sq0YQlxhxs3cR2IwHY0I49uQI3Q',
	} 
});