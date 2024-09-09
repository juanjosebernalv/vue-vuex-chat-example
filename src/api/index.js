export const getUser = async (userID) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);

  const data = await res.json();

  return data;
};