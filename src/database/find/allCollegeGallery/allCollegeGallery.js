export default async function allCollegeGallery() {
  // console.log(email)
  const res = await fetch(`/api/college-gallery/`, {
    cache: 'no-store'
  });
  return res.json();
}
