import emoji from './json.js';

let textInput = document.body.querySelector('.text-input');
let placeholder = document.body.querySelector('.placeholder');
let svgContainer = document.body.querySelector('.svg_container');
let emojiContainer = document.body.querySelector('.emoji');
let emojiWrapSmile = document.body.querySelector('.emoji_wrapSmile');
let emojiRecent = document.body.querySelector('.emoji_recent');
let iconContainer = document.body.querySelector('.svg_container_icon');
let smileIcon = document.body.querySelector('.smile_icon');
let clockIcon = document.body.querySelector('.clock_icon');
let recentContainer = document.body.querySelector('.recent_smile-container');

function main() {
    textInput.onfocus = (el) => {
        placeholder.classList.add("placeholder_opacity");
    }
    
    textInput.onblur = (el) => {
        placeholder.classList.remove("placeholder_opacity");
        checkFocus();
    }
    
    svgContainer.onclick = (event) => {
        let target = event.target;
        if (target.className === 'svg_img') {
            emojiContainer.classList.toggle("emoji_active");
        }
    }

    for (let i = 0; i < emoji.length; i++) {
        emojiWrapSmile.append(getDiv());
        let emojiTitles = document.body.querySelectorAll('.emoji_title');
        emojiTitles[i].innerHTML = emoji[i]['title'];
        
        emojiWrapSmile.append(getSmileContainer());
        let smileContainer = document.body.querySelectorAll('.smile_container');
        for (let j = 0; j < emoji[i]['items'].length; j++) {
            smileContainer[i].append(getSmileWrap());
        }
        
        for (let k = 0; k < smileContainer[i].children.length; k++) {
            smileContainer[i].children[k].innerHTML = emoji[i]['items'][k];
        }
    }
    
    emojiContainer.onclick = (event) => {
        let smile = event.target.innerHTML;
        let textInputText = textInput.outerText;
        if (event.target.className === 'smile_wrap') {
            textInput.innerHTML += smile;
            if (textInputText != ' ') {
                placeholder.classList.add('placeholder_hiden');
            } else {
                placeholder.classList.remove('placeholder_hiden');
            }

            let target = event.target;
            let clone = target.cloneNode(true);
            recentContainer.append(clone); 
        }
    }
    
    iconContainer.onclick = (event) => {
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
}


function getDiv() {
    let div = document.createElement('div');
    div.className = 'emoji_title';
    return div;
}

function getSmileContainer() {
    let div = document.createElement('div');
    div.className = 'smile_container';
    return div;
}

function getSmileWrap() {
    let div = document.createElement('div');
    div.className = 'smile_wrap';
    return div;
}


main();