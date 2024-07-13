export default async function allReviewInfo() {
  // console.log(email)
  const res = await fetch(`http://localhost:3000/api/review/`, {
    cache: 'no-store'
  });
  return res.json();
}
