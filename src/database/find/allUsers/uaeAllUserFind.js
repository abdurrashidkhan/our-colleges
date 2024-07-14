
export default async function uaeAllUserFind() {
  // console.log(email)
  const res = await fetch(`/api/teammate/`, {
    cache: 'no-store'
  });
  return res.json();
}
