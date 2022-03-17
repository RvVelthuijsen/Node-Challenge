const info = require("./information.js");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, I'm ${info.name} from the ${info.campus} campus!`,
    e : "^^",
    T : "U "
}));