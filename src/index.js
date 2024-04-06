import './reset.css';
import './style.css';
import{ home } from './pages/home/home';
import { about } from './pages/about/about';
import { menu } from './pages/menu/menu';

const content = document.querySelector("#content");
const header = document.querySelector("header");
const createNav = () => {
    const nav = document.createElement("nav");

    for(let i = 0; i < 3; i++) {
        const button = document.createElement("button");
        if(i == 0) {
            button.innerText = "Home";
            button.classList.add("home");
        } else if(i == 1) {
            button.innerText = "About";
            button.classList.add("about");
        } else if(i == 2) {
            button.innerText = "Menu";
            button.classList.add("menu");
        }
        nav.appendChild(button);
    }
    return nav;
}


header.appendChild(createNav());
content.appendChild(home());
const buttons = document.querySelectorAll("button");
console.log(buttons);
let i = 0;
buttons.forEach(button => {
    if(button.classList.contains("home")) {
        button.addEventListener('click', () => {
            content.innerHTML = '';
            content.appendChild(home());
        })
        // console.log(button.classList);
    } else if(button.classList.contains("about")) {
        // console.log(button.classList);
        button.addEventListener('click', () => {
            content.innerHTML = '';
            // content.appendChild(home());
            about()
        })
    } else if(button.classList.contains("menu")) {
        // console.log(button.classList);
        button.addEventListener('click', () => {
            content.innerHTML = '';
            // content.appendChild(home());
            menu();
        })
    }
    // button.addEventListener('click')
});


console.log("help - 2");