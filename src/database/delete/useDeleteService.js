export default async function uesDeleteService(id) {
  const res = await fetch(`http://localhost:3000/api/service/${id}/`, {
    method: "DELETE",
    cache: "no-store",
  });
  return res.json();
}
