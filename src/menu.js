const menu = () => {
    let content = document.getElementById('content');
    let div = document.createElement('div');
    div.id = "header";

    let logo = document.createElement('img');
    logo.src = "./assets/logo.svg";
    div.appendChild(logo);

    let menuItems = document.createElement('div');
    menuItems.id = "menu-items";

    let home = document.createElement('p');
    home.textContent = "Home";
    menuItems.appendChild(home);

    let menu = document.createElement('p');
    menu.textContent = "Menu";
    menuItems.appendChild(menu);

    let contact = document.createElement('p');
    contact.textContent = "Contact";
    menuItems.appendChild(contact);

    div.appendChild(menuItems);
    content.appendChild(div);
}

export { menu };