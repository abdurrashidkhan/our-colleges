
export default async function uaeAllUserFind() {
  // console.log(email)
  const res = await fetch(`http://localhost:3000/api/teammate/`, {
    cache: 'no-store'
  });
  return res.json();
}
