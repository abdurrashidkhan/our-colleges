export default async function uesAllProjects() {
  // console.log(email)
  const res = await fetch(`http://localhost:3000/api/project/`, {
    cache: 'no-store'
  });
  return res.json();
}
