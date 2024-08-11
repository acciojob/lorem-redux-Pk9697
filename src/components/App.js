import React, { useEffect } from 'react'
import './../styles/App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux'
import Post from './Post'

const App = () => {
	const dispatch = useDispatch()
	const { posts } = useSelector((state) => state)

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])
	return (
		<div className='posts'>
			{/* Do not remove the main div */}
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</div>
	)
}

export default App
