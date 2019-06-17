let numInput = document.querySelector("#subNum")
let subSec = document.querySelector('#subGoesHere')

let pvtNum = 10;

const createCard = () => {
    let useNum = numInput.value;
    let newEl = document.createElement('div')
    newEl.setAttribute('id', '#subtractHere')
    newEl.innerHTML = `<p>${useNum} - 10 = ${sub(useNum)}</p>`;
    return newEl

}


const addToDom = (section, card) => {
    section.appendChild(card)
}

const sub = (num) => {
    return num - pvtNum;
}

const createSubCard = () => {
    let newCard = createCard()
    addToDom(subSec, newCard)
    numInput.value = ""
}
export {createSubCard}