export default async function uesAllEvents() {
  // console.log(email)
  const res = await fetch(`http://localhost:3000/api/college-events/`, {
    cache: 'no-store'
  });
  return res.json();
}
