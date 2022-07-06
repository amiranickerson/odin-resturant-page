import { loadHome } from './homePage';
import { loadMenu } from './menuPage';
import { loadContact } from './contactPage';
import { menu } from './menu';




function renderHeader() {
    menu();
    let nav = document.getElementById('menu-items');
    let homeButton = nav.childNodes[0];
    let menuButton = nav.childNodes[1];
    let contactButton = nav.childNodes[2];

    document.addEventListener('click', (event) => {
        if (event.target.textContent === 'Home') {
            removeContent();
            loadHome();
        }
    });
    document.addEventListener('click', (event) => {
        if (event.target.textContent === 'Menu') {
            removeContent();
            loadMenu();
        }
    });
    document.addEventListener('click', (event) => {
        if (event.target.textContent === 'Contact') {
            removeContent();
            loadContact();
        }
    });
}


function removeContent() {
    let content = document.getElementById("content");
    while (content.childElementCount > 1) {
        content.removeChild(content.lastChild)

    }
}
renderHeader();
loadHome();