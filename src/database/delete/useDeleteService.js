export default async function uesDeleteService(id) {
  const res = await fetch(`/api/service/${id}/`, {
    method: "DELETE",
    cache: "no-store",
  });
  return res.json();
}
