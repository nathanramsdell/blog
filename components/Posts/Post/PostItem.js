import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PostTag from './PostTag'

const PostItem = ({ post }) => {
    return (
        <Link href={`/posts/${post.id}`} className="post__item overflow-hidden px-6 md:px-0 md:max-h-[500px]">
            <div>
                {/* Featured image */}
                <div className='relative'>
                    <div className=''>
                        <Image
                            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
                            width={600}
                            height={200}
                            objectFit='contain'
                            alt='Post Image'
                        />
                    </div>
                    <div>
                        <div className='relative flex flex-col justify-end gap-3 pt-10 pr-4 mb-16'>
                            <p className='font-medium'>Nathan Ramsdell - 20 Jan 2022</p>
                            <div className='flex items-start'>
                                <h4 className='font-medium text-xl flex-1'>{post.title}</h4>
                                <ArrowUpRightIcon className='w-7 ml-5 post__item__icon' />
                            </div>
                            <p className='truncate font-light'>{post.body}</p>
                            <div className='flex gap-2'>
                                {post.tags.map((tag, idx) => {
                                    return (
                                        <PostTag key={`post-tag-${idx}`} tag={tag} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Link>

    )
}

export default PostItem