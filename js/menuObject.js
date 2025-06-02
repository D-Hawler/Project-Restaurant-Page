class menuItems {
    constructor(name, ingredients, price) {
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
    };

    set ingredients(value) {
        if (!Array.isArray(value)) {
            throw Error("Inappropriate format for ingredients");
        } else {
            this._ingredients = value;
        };
    };
    get ingredients() {
        return this._ingredients;
    };
};


const breakfasts = [
    new menuItems("Omelette with cheese and herbs", ["eggs", "cheese", "herbs"], 3),
    new menuItems("French toast with berries", ["bread", "eggs", "berries", "milk"], 3),
    new menuItems("Oatmeal with fruits", ["oatmeal", "fruits", "milk"], 2),
    new menuItems("Fried eggs with bacon", ["eggs", "bacon"], 3),
    new menuItems("Syrniki with sour cream", ["cottage cheese", "eggs", "flour", "sour cream"], 3),
    new menuItems("Pancakes with cottage cheese", ["pancakes", "cottage cheese"], 3),
    new menuItems("Croissant with ham and cheese", ["croissant", "ham", "cheese"], 3)
];

const salads = [
    new menuItems("Greek salad", ["tomatoes", "cucumbers", "feta", "olives"], 4),
    new menuItems("Caesar with chicken", ["chicken", "lettuce", "parmesan", "caesar sauce"], 4),
    new menuItems("Salad with tuna and egg", ["tuna", "egg", "lettuce"], 4),
    new menuItems("Salad with avocado and shrimp", ["avocado", "shrimp", "lettuce"], 4),
    new menuItems("Vitamin salad with carrot and apple", ["carrot", "apple"], 2),
    new menuItems("Salad with chicken and pineapple", ["chicken", "pineapple", "mayonnaise"], 4)
];

const pastries = [
    new menuItems("Classic croissant", ["croissant"], 1),
    new menuItems("Apple puff pastry", ["puff pastry", "apple"], 2),
    new menuItems("Eclair with vanilla cream", ["eclair", "vanilla cream"], 2),
    new menuItems("Chocolate muffin", ["chocolate", "flour", "eggs"], 2),
    new menuItems("Shortbread cookies", ["flour", "butter", "sugar"], 1),
    new menuItems("Cinnamon roll", ["bun", "cinnamon", "icing"], 2)
];

const desserts = [
    new menuItems("Tiramisu", ["mascarpone", "savoiardi biscuits", "coffee"], 3),
    new menuItems("New York cheesecake", ["cream cheese", "biscuits", "eggs"], 3),
    new menuItems("Medovik (Honey cake)", ["honey", "flour", "sour cream"], 3),
    new menuItems("Chocolate fondant", ["chocolate", "eggs", "flour"], 3),
    new menuItems("Panna cotta with berries", ["cream", "berries", "gelatin"], 3),
    new menuItems("Apple strudel", ["apples", "dough", "cinnamon"], 3)
];

const beverages = [
    new menuItems("Cappuccino", ["coffee", "milk"], 2),
    new menuItems("Latte", ["coffee", "milk"], 2),
    new menuItems("Espresso", ["coffee"], 1),
    new menuItems("Hot chocolate", ["chocolate", "milk"], 2),
    new menuItems("Green tea", ["green tea"], 1),
    new menuItems("Black tea with lemon", ["black tea", "lemon"], 1),
    new menuItems("Berry fruit drink", ["berries", "sugar", "water"], 1)
];

const specialties = [
    new menuItems("Homemade borscht with pampushki", ["beetroot", "cabbage", "meat", "pampushki"], 4),
    new menuItems("Lasagna with meat", ["pasta", "meat", "bechamel sauce"], 5),
    new menuItems("Chicken in cream sauce", ["chicken", "cream", "spices"], 4),
    new menuItems("Pasta carbonara", ["pasta", "bacon", "eggs", "cheese"], 4),
    new menuItems("Fish cutlets with mashed potatoes", ["fish", "potatoes", "eggs"], 4),
    new menuItems("Vegetable gratin", ["vegetables", "cheese", "cream"], 4)
];


export { breakfasts, salads, pastries, desserts, beverages, specialties };