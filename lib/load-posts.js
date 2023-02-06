export async function loadPosts() {
 // Calling external api
 const res = await fetch('https://dummyjson.com/posts?limit=0')
 const posts = await res.json()
 
 return posts
}
