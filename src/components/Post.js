import React from 'react'

function Post({ post = {} }) {
	return (
		<li className='post'>
			<h1>
				<strong>Title:</strong> {post.title}
			</h1>
			<p>
				<strong>Body:</strong> {post.body}
			</p>
		</li>
	)
}

export default Post
