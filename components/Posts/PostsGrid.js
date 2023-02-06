import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import PostItem from './Post/PostItem';

const PostsGrid = ({ posts }) => {

    const postsPerRange = 6;
    const [currentPage, setCurrentPage] = useState(0)
    const {from, to} = getPagination(currentPage, postsPerRange)
    const [currentPosts, setCurrentPosts] = useState(posts.posts.slice(from, to))
    const lastPageNumber = Math.ceil(posts.total / postsPerRange)
    
    useEffect(() => {
        const newArray = posts.posts.slice(from,to)
        setCurrentPosts(newArray)

    }, [currentPage])

    return (
        
        <section>
            {/* grid */}
            <div className='grid md:grid-cols-3 gap-5 px-2'>
                {currentPosts.map((post, idx) => {
                    return (
                        <PostItem post={post} key={`post-${idx}`} />
                    )
                })}
            </div>
            {/* pagination */}
            <Pagination currentPosts={currentPosts} currentPage={currentPage} setCurrentPage={setCurrentPage} lastPageNumber={lastPageNumber} totalResults={posts.total} />
        </section>
    )
}

export default PostsGrid

export const getPagination = (page, size) => {
    const limit = +size 
    const from = page ? page * limit : 0
    const to = page ? from + size : size
    return { from, to };
};