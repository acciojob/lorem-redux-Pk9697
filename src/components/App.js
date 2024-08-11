import React, { useEffect } from 'react'
import './../styles/App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux'
import Post from './Post'
import Posts from './Posts'

const App = () => {
	const dispatch = useDispatch()
	const { posts, isLoading } = useSelector((state) => state)

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])
	return (
		<div>
			<h1>A short Narration of Lorem Ipsum</h1>
			<h4>{isLoading && 'Loading...'}</h4>
			<Posts posts={posts} />
		</div>
	)
}

export default App
