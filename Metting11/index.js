import helloWorld from "./helloWorld.js";
import ambilDataUser from "./AmbilDataUser.js";
import ambilDataUserAsync from "./AmbilDataUserAync.js";

// 1.
async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}
// messages();

// 2.

ambilDataUser();

// 3,
ambilDataUserAsync();
