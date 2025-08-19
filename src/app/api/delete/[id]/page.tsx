type Params = {
  params: { id: string };
};

export default async function DeletePage({ params }: Params) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>DELETE Request: /api/delete/{params.id}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
