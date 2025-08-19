type Params = {
  params: { id: string };
};

export default async function UpdatePage({ params }: Params) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
    method: "PUT",
    body: JSON.stringify({
      id: params.id,
      title: "Updated Title",
      body: "This post has been updated using Next.js!",
      userId: 1,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });

  const data = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>PUT Request: /api/update/{params.id}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
