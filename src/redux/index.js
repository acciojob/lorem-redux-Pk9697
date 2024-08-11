import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { thunk } from 'redux-thunk'

const FETCH_POSTS = 'FETCH_POSTS'

const initialState = {
	posts: [],
}

const fetchPosts = () => {
	return (dispatch) => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: FETCH_POSTS,
					payload: data,
				})
			})
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POSTS: {
			return {
				...state,
				posts: action.payload,
			}
		}
		default:
			return state
	}
}

export { fetchPosts }

const store = createStore(reducer, applyMiddleware(thunk))

export default store
