import "./createInitialDOM.js";
import { breakfasts, salads, pastries, desserts, beverages, specialties } from "./menuObject.js";
const menuSections = {breakfasts, salads, pastries, desserts, beverages, specialties};

document.querySelectorAll(".navMenu li").forEach(child => {child.addEventListener("click", (event) => {
    const sectionName = event.target.text.toLowerCase();
    const currentSection = menuSections[sectionName];

    const content = document.querySelector("#content");
    content.replaceChildren();

    content.classList.add("contentGrid");

    for (let i = 0; i < currentSection.length; i++) {
        const menuCard = document.createElement("div");
        menuCard.classList.add("menuCard");

        const h2 = document.createElement("h2");
        h2.textContent = currentSection[i].name;

        const info = document.createElement("div");
        info.classList.add("info");

        const img = document.createElement("img");
        img.setAttribute("src", "./img/logo.jpg");

// Don't forget to make a check to make sure the number of ingredients is at least 3.
        const ul = document.createElement("ul");
        for (let x = 0; x < 3; x++) {
            const li = document.createElement("li");
            li.textContent = currentSection[i].ingredients[x];
            ul.appendChild(li);
        };

        const p = document.createElement("p");
        p.textContent = `$${currentSection[i].price}`;

        info.appendChild(img);
        info.appendChild(ul);

        menuCard.appendChild(h2);
        menuCard.appendChild(info);
        menuCard.appendChild(p);

        content.appendChild(menuCard);
    };
})});