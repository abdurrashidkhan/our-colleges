export default async function allFindResearch() {
  // console.log(email)
  const res = await fetch(`http://localhost:3000/api/research/`, {
    cache: 'no-store'
  });
  return res.json();
}
