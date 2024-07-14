export default async function findOneGallery(id) {
  console.log(id)
  const res = await fetch(`/api/college-gallery/${id}/`, {
    cache: 'no-store'
  });
  return res.json();
}
