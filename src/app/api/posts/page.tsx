export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>GET Request: /api/posts</h1>
      <ul>
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
