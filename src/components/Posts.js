import React from 'react'
import Post from './Post'

function Posts({ posts = [], isLoading = false }) {
	return (
		<ul className='posts'>
			{isLoading && (
				<li>
					<p className='title'>Loading...</p>
				</li>
			)}
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</ul>
	)
}

export default Posts
