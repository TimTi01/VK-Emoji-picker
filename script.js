import emoji from './json.js';

let textInput = document.body.querySelector('.text-input');
let placeholder = document.body.querySelector('.placeholder');
let svgConteiner = document.body.querySelector('.svg_conteiner');
let emojiConteiner = document.body.querySelector('.emoji');
let emojiWrapSmile = document.body.querySelector('.emoji_wrapSmile');
let emojiRecent = document.body.querySelector('.emoji_recent');
let iconConteiner = document.body.querySelector('.svg_conteiner_icon');
let smileIcon = document.body.querySelector('.smile_icon');
let clockIcon = document.body.querySelector('.clock_icon');
let recentConteiner = document.body.querySelector('.recent_smile-conteiner');



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
    emojiConteiner.classList.add("emoji_active");
})


for (let i = 0; i < emoji.length; i++) {
    emojiWrapSmile.append(getDiv());
    let emojiTitles = document.body.querySelectorAll('.emoji_title');
    emojiTitles[i].innerHTML = emoji[i]['title'];
    
    emojiWrapSmile.append(getSmileConteiner()); //контейнер
    let smileConteiner = document.body.querySelectorAll('.smile_conteiner');
    for (let j = 0; j < emoji[i]['items'].length; j++) {
        smileConteiner[i].append(getSmileWrap()); //обёртка
    }
    
    for (let k = 0; k < smileConteiner[i].children.length; k++) {
        smileConteiner[i].children[k].innerHTML = emoji[i]['items'][k];
    }
}

emojiConteiner.onclick = (event) => {
    let smile = event.target.innerHTML;
    console.log(event.target);
    if (event.target.className === 'smile_wrap') {
        textInput.innerHTML += smile;

        let target = event.target;

        let clone = target.cloneNode(true);
        recentConteiner.append(clone); 
    }
}



iconConteiner.onclick = (event) => {
    let target = event.target;
    if (target.className === 'smile_icon') {
        smileIcon.classList.add("icon_active");
        clockIcon.classList.remove("icon_active");

        emojiWrapSmile.classList.remove("wrap_hiden");
        emojiRecent.classList.add("wrap_hiden");
    } else if (target.className === 'clock_icon') {
        clockIcon.classList.add("icon_active");
        smileIcon.classList.remove("icon_active");
        
        emojiWrapSmile.classList.add("wrap_hiden");
        emojiRecent.classList.remove("wrap_hiden");
    }
}

function getTextLenght() {
    return textInput.innerText;
}

function getDiv() {
    let div = document.createElement('div');
    div.className = 'emoji_title';
    return div;
}


function getSmileConteiner() {
    let div = document.createElement('div');
    div.className = 'smile_conteiner';
    return div;
}


function getSmileWrap() {
    let div = document.createElement('div');
    div.className = 'smile_wrap';
    return div;
}