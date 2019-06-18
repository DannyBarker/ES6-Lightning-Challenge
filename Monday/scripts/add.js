let addSec = document.querySelector("#addGoesHere");
let numInput = document.querySelector("#addNum")


let pvtNum = 10;


const createCard = () => {
    let useNum = numInput.value;
    let newEl = document.createElement('div')
    newEl.setAttribute('id', '#addHere')
    newEl.innerHTML = `<p>${useNum} + 10 = ${sub(useNum)}</p>`;
    return newEl

}


const addToDom = (section, card) => {
    section.appendChild(card)
}

const sub = (num) => {
    return num - pvtNum;
}

const createAddCard = () => {
    let newCard = createCard()
    addToDom(addSec, newCard)
    numInput.value = ""
}
export {createAddCard}