export default async function uesAllEvents() {
  // console.log(email)
  const res = await fetch(`/api/college-events/`, {
    cache: 'no-store'
  });
  return res.json();
}
