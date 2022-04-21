import Animal from "./Animal.js";
import KEY, { messageTXT, config, show } from "./Helper.js";

const animal = new Animal("Leon");
console.log(animal.print());

console.log(KEY);
console.log(messageTXT);
console.log(config.user);

//Opcion con Alias
//import KEY, * as Helper from "./Helper";
//console.log(Helper.messageTXT);
//console.log(Helper.config.user);
