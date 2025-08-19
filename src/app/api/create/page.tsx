export default async function CreatePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Hello",
      body: "Next.js API test",
      userId: 1,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });

  const data = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>POST Request: /api/create</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
