async function ambilDataUserAsync() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    console.log(users.data);
    return users.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default ambilDataUserAsync;
