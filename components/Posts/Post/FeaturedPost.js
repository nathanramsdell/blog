import Link from 'next/link'
import React from 'react'
import PostTag from './PostTag'

const FeaturedPost = ({post}) => {
    const sectionStyle = {
        backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
        backgroundSize: "cover",
    }
  return (
    <Link href={`/posts/${post.id}`}>
        <div className='relative text-white min-h-[450px] flex flex-col justify-end gap-3 p-5 mb-16' style={sectionStyle}>
            <p className='font-medium'>Nathan Ramsdell - 20 Jan 2022</p>
            <h4 className='font-medium text-4xl'>{post.title}</h4>
            <p className='truncate max-w-[65%] font-light'>{post.body}</p>
            <div className='flex gap-4'>
                {post.tags.map((tag, idx) => {
                    return (
                        <PostTag key={`post-tag-${idx}`} tag={tag} />
                    )
                })}
            </div>
        </div>
    </Link>
  )
}

export default FeaturedPost