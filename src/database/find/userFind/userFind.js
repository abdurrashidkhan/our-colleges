export default async function userInfo(email) {
  console.log(email)
  const res = await fetch(`/api/users/${email}`, {
    cache: "no-store",
  });
  return res.json();
}
