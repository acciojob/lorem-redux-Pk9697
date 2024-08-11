import React from 'react'
import Post from './Post'

function Posts({ posts = [] }) {
	return (
		<ul className='posts'>
			{/* Do not remove the main div */}
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</ul>
	)
}

export default Posts
