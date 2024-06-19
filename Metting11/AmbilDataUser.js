function ambilDataUser() {
  return new Promise((resolve, reject) => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((users) => {
        console.log(users.data);
        resolve(users.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default ambilDataUser;
