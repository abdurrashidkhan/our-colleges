export default async function findOneCollegeEvent(id) {
  console.log(id)
  const res = await fetch(`/api/college-events/${id}/`, {
    cache: 'no-store'
  });
  return res.json();
}
