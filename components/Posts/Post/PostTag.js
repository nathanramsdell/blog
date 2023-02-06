import React from 'react'

const PostTag = (props) => {
  return (
    <div className='blog__tag border px-2 rounded-full font-light text-sm'>{props.tag}</div>
  )
}

export default PostTag