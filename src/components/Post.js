import React from 'react'

function Post({post={}}) {
  return (
      <div className='post'>
          <p><strong>Title:</strong> {post.title}</p>
          <p><strong>Body:</strong> {post.body}</p>
    </div>
  )
}

export default Post