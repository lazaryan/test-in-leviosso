import axios from 'axios'

export class API {
	read({ url, searchCriteria, actionType, dispatch }) {
		return this.handleResponse(axios.get(
			searchCriteria ? this.applySearchCriteria(url, searchCriteria) : url
		), actionType, dispatch)
	}

	update({ url, payload, actionType, dispatch }) {
		return this.handleResponse(axios.put(url, payload), actionType, dispatch)
	}

	create({ url, payload, actionType, dispatch }) {
		return this.handleResponse(axios.post(url, payload), actionType, dispatch)
	}

	delete({ url, payload, actionType, dispatch }) {
		return this.handleResponse(axios.delete(url, payload), actionType, dispatch)
	}

	handleResponse(request, actionType, dispatch) {
		return actionType && dispatch ?
			request
				.then(response => dispatch({ type: actionType, payload: response.data }))
				.catch(console.error) :
			request
	}

	applySearchCriteria(url, searchCriteria) {
		return url.concat('?' +
			Object.entries(searchCriteria)
				.map(([criteria, value]) => `${criteria}=${value}&`))
	}

	updateToken() {
		axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk'
	}
}
