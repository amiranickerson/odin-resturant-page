
const menuItem = (name, description, price) => {
    const render = () => {
        let div = document.createElement("div");

        let title = document.createElement("h2");
        title.textContent = name;

        let desc = document.createElement("p");
        desc.textContent = description;

        let pric = document.createElement("p");
        pric.textContent = price;

        div.appendChild(title);
        div.appendChild(desc);
        div.appendChild(pric);
        return div;
    }
    return { name, description, price, render }
}

let drinks = [
    menuItem("Refillable House Drip", "Southern pecan drip coffee", "$2.99"),
    menuItem("Espresso", "Delicious espresso", "$3.99"),
    menuItem("Latte", "Hot or Iced", "$4.99"),
    menuItem("Cold Brew", "Iced coffee with foam", "$4.99"),
    menuItem("Cappuccino", "Very fancy", "$3.99"),
    menuItem("Cafe Au Lait", "Even fancier", "$3.99"),
];

let foods = [
    menuItem("Beignets", "Served with honey", "$7.99"),
    menuItem("Parfait", "Yogurt and fruit", "$5.99"),
    menuItem("Oatmeal", "Oats with berries", "$5.99"),
    menuItem("Biscuits", "Smothered in gravy", "$7.99"),
    menuItem("Bagel", "Plain or Everything", "$4.99"),
    menuItem("Salmon Bagel", "Onions, capers, and cream cheese", "$6.99"),
];

const loadMenu = () => {
    let content = document.getElementById('content');

    let header = document.createElement('img');
    header.src = "./assets/table.jpg";
    content.appendChild(header);

    let title = document.createElement('h1');
    title.textContent = "Our Menu";
    content.appendChild(title);



    let para = document.createElement('p');
    para.textContent = "Cappuccino, brewed qui white to go acerbic barista. Percolator, espresso id et ristretto acerbic espresso crema instant grinder decaffeinated. Half and half, viennese id aged milk americano mocha spoon.";
    content.appendChild(para);

    let drinkTitle = document.createElement('h1');
    drinkTitle.textContent = "Drinks";
    drinkTitle.className = "title";
    content.appendChild(drinkTitle);

    let menuItems = document.createElement("div");
    menuItems.className = "menuItems";

    drinks.forEach(drink => menuItems.appendChild(drink.render()));
    content.appendChild(menuItems);

    let foodTitle = document.createElement('h1');
    foodTitle.textContent = "Food";
    foodTitle.className = "title";
    content.appendChild(foodTitle);

    let menuItems2 = document.createElement("div");
    menuItems2.className = "menuItems";
    foods.forEach(food => menuItems2.appendChild(food.render()));
    content.appendChild(menuItems2);
};

export { loadMenu };