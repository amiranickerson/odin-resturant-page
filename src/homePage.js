const loadHome = () => {
    let content = document.getElementById('content');

    let header = document.createElement('img');
    header.src = "./assets/coffee-beans.jpg";
    content.appendChild(header);

    let title = document.createElement('h1');
    title.textContent = "The best coffee shop in DFW";
    content.appendChild(title);

    let para = document.createElement('p');
    para.textContent = "Cappuccino, brewed qui white to go acerbic barista. Percolator, espresso id et ristretto acerbic espresso crema instant grinder decaffeinated. Half and half, viennese id aged milk americano mocha spoon. Iced aromatic, cultivar crema lungo a mug black at grounds steamed filter.Mazagran French press shop crema crema coffee sugar dark.Plunger pot, saucer acerbic white carajillo, plunger pot, ristretto saucer grounds extraction trifecta.";
    content.appendChild(para);
};

export { loadHome };