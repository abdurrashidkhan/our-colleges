export default async function uesAllServices() {
  // console.log(email)
  const res = await fetch(`http://localhost:3000/api/service/`, {
    cache: 'no-store'
  });
  return res.json();
}
