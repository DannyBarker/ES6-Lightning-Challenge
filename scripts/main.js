import {createAddCard} from "./add.js"
import {createSubCard} from "./subtract.js"

let subBtn = document.querySelector("#subIt");
let addBtn = document.querySelector("#addIt");

subBtn.addEventListener('click', createSubCard)
addBtn.addEventListener('click', createAddCard)