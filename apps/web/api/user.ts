export async function getCurrentUser({ id }) {
  const data = await fetch(`${process.env.API_URL}/api/users/${id}`);
  const result = await data.json();
  return result;
}
