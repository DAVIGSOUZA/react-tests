import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPostsAndUsers } from '../redux/actions'
import UserHeader from './UserHeader'

function PostList({posts, getPostsAndUsers}) {
  useEffect(() => {
    getPostsAndUsers()
  }, [])

  return (
    <div>
      <h1>Post List</h1>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <UserHeader userId={post.userId}/>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { posts: state.posts}
}

export default connect(
  mapStateToProps,
  { getPostsAndUsers }
)(PostList)