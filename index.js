import { Profile } from "./profile.js";

let profile = new Profile("Suzuki Aki", 24);

console.log(profile.greetings());

document.getElementById("app").innerText = profile.greetings();