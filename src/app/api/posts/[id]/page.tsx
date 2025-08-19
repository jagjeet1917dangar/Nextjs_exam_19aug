type Params = {
  params: { id: string };
};

export default async function PostByIdPage({ params }: Params) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>GET Request: /api/posts/{params.id}</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
