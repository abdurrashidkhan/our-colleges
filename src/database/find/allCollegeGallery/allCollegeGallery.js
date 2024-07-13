export default async function allCollegeGallery() {
  // console.log(email)
  const res = await fetch(`http://localhost:3000/api/college-gallery/`, {
    cache: 'no-store'
  });
  return res.json();
}
