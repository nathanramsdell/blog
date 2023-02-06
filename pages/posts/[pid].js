import Image from "next/image"
import Link from "next/link"


const Post = ({ post, pid }) => {
  console.log(post)
  return (
    <div className='hero container max-w-[800px] mx-auto px-2 lg:px-0 pt-6'>
      <div className="text-center">
        <div className="flex gap-2 justify-center items-center capitalize">
          {post.tags.map((tag, idx) => {
            return (
              <>
                <p key={`tag-${idx}`}>{tag}</p>
                {idx < post.tags.length - 1 && <span className="font-bold">&#183;</span>}

              </>
            )
          })}
        </div>
        <h1 className="text-3xl font-medium md:text-5xl my-5">{post.title}</h1>
        <div className="mb-5">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
            width={800}
            height={800}
            objectFit='contain'
            alt='Post Image'
          />
        </div>
        <p className="mb-4 text-left">{post.body}</p>

      </div>
      {/* Next post buttons */}

      <div className="flex flex-1 items-center justify-around mb-4">
        <Link href={`/posts/${Math.max(1, +pid - 1)}`} className="text-gray-700 pagination__select bg-gray-50 hover:bg-gray-100 relative cursor-pointer ml-3 inline-flex items-center rounded-md  px-4 py-2 text-sm font-medium">
          Previous
        </Link>
       
        <Link href={`/posts/${+pid + 1}`} className="text-gray-700 pagination__select bg-gray-50 hover:bg-gray-100 cursor-pointer relative ml-3 inline-flex items-center rounded-md  px-4 py-2 text-sm font-medium">
          Next
        </Link>
      </div>


    </div>
  )
}

export default Post

export async function getServerSideProps({ params }) {
  const pid = params.pid
  const res = await fetch(`https://dummyjson.com/posts/${pid}`)
  const post = await res.json()

  return {
    props: {
      post,
      pid
    }
  }
}