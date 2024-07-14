export default async function allFindResearch() {
  // console.log(email)
  const res = await fetch(`/api/research/`, {
    cache: 'no-store'
  });
  return res.json();
}
