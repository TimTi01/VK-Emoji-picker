let textInput = document.body.querySelector('.text-input');
let placeholder = document.body.querySelector('.placeholder');
let svgConteiner = document.body.querySelector('.svg_conteiner');
let emojiConteiner = document.body.querySelector('.emoji');

textInput.onfocus = (el) => {
    placeholder.classList.toggle("placeholder_active");
}

textInput.onblur = (el) => {
    placeholder.classList.toggle("placeholder_active");
}

textInput.addEventListener("keydown", () => {
    if (getTextLenght() !== " ") {
        placeholder.classList.add("placeholder_active-opacity");
    } else if (getTextLenght() === "") {
        placeholder.classList.remove("placeholder_active-opacity");
    }
})

svgConteiner.addEventListener("click", () => {
    emojiConteiner.classList.toggle("emoji_active");
})





function getTextLenght() {
    return textInput.innerText;
}