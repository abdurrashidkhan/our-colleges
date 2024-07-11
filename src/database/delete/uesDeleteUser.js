export default async function uesDeleteUser(id) {
  // console.log(id)
  const res = await fetch(`http://localhost:3000/api/users/action/${id}/`, {
    method: "DELETE",
    cache: 'no-store'
  });
  return res.json();
}
