
const getPost = async(slug: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    const data = await response.json()
    return data
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  console.log(id)
  const post = await getPost(id)
 
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
