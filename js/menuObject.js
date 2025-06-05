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
    new menuItems("Classic Omelette with Herbs", ["eggs", "cheese", "chives"], 4),
    new menuItems("Eggs Benedict", ["english muffin", "ham", "poached egg", "hollandaise"], 6),
    new menuItems("Breakfast Burrito", ["tortilla", "scrambled eggs", "beans", "cheese"], 6),
    new menuItems("Smoked Salmon Bagel", ["bagel", "cream cheese", "salmon", "capers"], 6),
    new menuItems("Avocado Toast with Poached Egg", ["bread", "avocado", "egg", "spices"], 4),
    new menuItems("French Toast Casserole", ["bread", "eggs", "cinnamon", "syrup"], 4),
    new menuItems("Chia Pudding", ["chia seeds", "almond milk", "berries", "nuts"], 4),
    new menuItems("Vegetable Frittata", ["eggs", "bell peppers", "onions", "spinach"], 5),
    new menuItems("Fluffy Pancakes with Maple Syrup", ["flour", "eggs", "milk", "butter"], 4),
    new menuItems("Greek Yogurt Parfait", ["yogurt", "granola", "honey", "fruits"], 4),
    new menuItems("Breakfast Quesadilla", ["tortilla", "cheese", "scrambled eggs", "salsa"], 5),
    new menuItems("Belgian Waffles with Berries", ["waffle mix", "berries", "whipped cream"], 5),
    new menuItems("Classic Omelette with Herbs", ["eggs", "cheese", "chives"], 4),
    new menuItems("Avocado Toast with Poached Egg", ["bread", "avocado", "egg", "spices"], 4),
    new menuItems("Smoked Salmon Bagel", ["bagel", "cream cheese", "salmon", "capers"], 6),
    new menuItems("Eggs Benedict", ["english muffin", "ham", "poached egg", "hollandaise"], 6)
];

const salads = [
    new menuItems("Beetroot and Goat Cheese", ["beets", "goat cheese", "arugula", "walnuts"], 8),
    new menuItems("Quinoa Power Bowl", ["quinoa", "kale", "avocado", "nuts"], 8),
    new menuItems("Cobb Salad", ["lettuce", "bacon", "egg", "avocado", "chicken"], 9),
    new menuItems("Asian Chicken Salad", ["chicken", "cabbage", "carrots", "sesame"], 8),
    new menuItems("Classic Caesar Salad", ["romaine", "croutons", "parmesan", "dressing"], 7),
    new menuItems("Tuna Nicoise", ["tuna", "green beans", "potatoes", "olives"], 9),
    new menuItems("Spinach and Strawberry", ["spinach", "strawberries", "almonds", "dressing"], 7),
    new menuItems("Waldorf Salad", ["apples", "celery", "walnuts", "yogurt"], 7),
    new menuItems("Caprese Salad", ["tomatoes", "mozzarella", "basil", "balsamic"], 8),
    new menuItems("Mediterranean Orzo", ["orzo", "cucumbers", "feta", "olives"], 7),
    new menuItems("Kale and Brussels Sprouts", ["kale", "brussels sprouts", "pecans", "dressing"], 8),
    new menuItems("Mexican Street Corn Salad", ["corn", "cotija cheese", "lime", "chili"], 7),
    new menuItems("Classic Caesar Salad", ["romaine", "croutons", "parmesan", "dressing"], 7),
    new menuItems("Beetroot and Goat Cheese", ["beets", "goat cheese", "arugula", "walnuts"], 8),
    new menuItems("Spinach and Strawberry", ["spinach", "strawberries", "almonds", "dressing"], 7),
    new menuItems("Tuna Nicoise", ["tuna", "green beans", "potatoes", "olives"], 9),
    new menuItems("Cobb Salad", ["lettuce", "bacon", "egg", "avocado", "chicken"], 9)
];

const pastries = [
  new menuItems("Cherry Cheese Croissant", ["croissant", "cherries", "cream cheese"], 4),
  new menuItems("Pain au Chocolat", ["pastry", "chocolate"], 4),
  new menuItems("Lemon Poppyseed Muffin", ["flour", "lemon", "poppyseeds"], 4),
  new menuItems("Banana Nut Muffin", ["flour", "bananas", "walnuts"], 3),
  new menuItems("Pumpkin Bread", ["flour", "pumpkin", "spices"], 4),
  new menuItems("Almond Croissant", ["croissant", "almond paste", "powdered sugar"], 4),
  new menuItems("Cinnamon Swirl Bun", ["dough", "cinnamon", "icing"], 3),
  new menuItems("Blueberry Scone", ["flour", "blueberries", "cream"], 3),
  new menuItems("Raspberry Danish", ["pastry", "raspberry jam", "cream cheese"], 4),
  new menuItems("Pecan Sticky Bun", ["dough", "pecans", "caramel"], 4),
  new menuItems("Chocolate Chip Cookie", ["flour", "chocolate chips", "butter"], 3),
  new menuItems("Apple Turnover", ["puff pastry", "apples", "cinnamon"], 4),
  new menuItems("Cherry Cheese Croissant", ["croissant", "cherries", "cream cheese"], 4),
  new menuItems("Pain au Chocolat", ["pastry", "chocolate"], 4),
  new menuItems("Pumpkin Bread", ["flour", "pumpkin", "spices"], 4),
  new menuItems("Almond Croissant", ["croissant", "almond paste", "powdered sugar"], 4),
  new menuItems("Blueberry Scone", ["flour", "blueberries", "cream"], 3)
];

const desserts = [
  new menuItems("Tiramisu", ["mascarpone", "ladyfingers", "coffee"], 7),
  new menuItems("Apple Pie", ["apples", "cinnamon", "pie crust"], 6),
  new menuItems("Panna Cotta", ["cream", "vanilla", "berries"], 6),
  new menuItems("Strawberry Shortcake", ["shortcake", "strawberries", "cream"], 6),
  new menuItems("Red Velvet Cupcake", ["flour", "cocoa", "cream cheese frosting"], 5),
  new menuItems("Chocolate Mousse", ["chocolate", "cream", "eggs"], 6),
  new menuItems("Peach Cobbler", ["peaches", "cinnamon", "batter"], 6),
  new menuItems("Crème Brûlée", ["cream", "vanilla", "sugar"], 6),
  new menuItems("Baklava", ["phyllo", "nuts", "honey"], 6),
  new menuItems("New York Cheesecake", ["cream cheese", "graham crackers", "berries"], 7),
  new menuItems("Chocolate Lava Cake", ["chocolate", "flour", "eggs"], 6),
  new menuItems("Key Lime Pie", ["lime", "condensed milk", "graham crust"], 6),
  new menuItems("Chocolate Lava Cake", ["chocolate", "flour", "eggs"], 6),
  new menuItems("Tiramisu", ["mascarpone", "ladyfingers", "coffee"], 7),
  new menuItems("Peach Cobbler", ["peaches", "cinnamon", "batter"], 6)
];

const beverages = [
  new menuItems("Berry Smoothie", ["berries", "yogurt", "honey"], 5),
  new menuItems("Iced Herbal Tea", ["herbal tea", "honey", "lemon"], 4),
  new menuItems("Mint Lemonade", ["lemon", "mint", "sugar"], 4),
  new menuItems("Iced Vanilla Latte", ["espresso", "milk", "vanilla", "ice"], 5),
  new menuItems("Chai Tea Latte", ["chai", "milk", "honey"], 4),
  new menuItems("Coconut Water", ["coconut"], 3),
  new menuItems("Caramel Macchiato", ["espresso", "caramel", "foamed milk"], 5),
  new menuItems("Cold Brew Coffee", ["coffee", "ice"], 4),
  new menuItems("Hot Chocolate", ["chocolate", "milk", "whipped cream"], 4),
  new menuItems("Matcha Green Tea Latte", ["matcha", "milk", "honey"], 5),
  new menuItems("Fresh Orange Juice", ["oranges"], 4),
  new menuItems("Sparkling Elderflower", ["elderflower", "sparkling water"], 4),
  new menuItems("Chai Tea Latte", ["chai", "milk", "honey"], 4),
  new menuItems("Iced Herbal Tea", ["herbal tea", "honey", "lemon"], 4),
  new menuItems("Coconut Water", ["coconut"], 3),
  new menuItems("Mint Lemonade", ["lemon", "mint", "sugar"], 4)
];

const specialties = [
  new menuItems("Lamb Chops", ["lamb", "rosemary", "potatoes"], 18),
  new menuItems("Beef Wellington", ["beef", "puff pastry", "mushrooms"], 18),
  new menuItems("Grilled Salmon", ["salmon", "lemon", "dill"], 15),
  new menuItems("Osso Buco", ["veal", "wine", "vegetables"], 17),
  new menuItems("Ratatouille", ["eggplant", "zucchini", "tomatoes"], 12),
  new menuItems("Vegetable Paella", ["rice", "saffron", "vegetables"], 14),
  new menuItems("Scallop Pasta", ["scallops", "pasta", "white wine sauce"], 16),
  new menuItems("Truffle Mushroom Risotto", ["arborio rice", "mushrooms", "truffle oil"], 12),
  new menuItems("Filet Mignon", ["beef", "herb butter", "asparagus"], 20),
  new menuItems("Lobster Thermidor", ["lobster", "cream", "cheese"], 22),
  new menuItems("Wild Mushroom Ravioli", ["ravioli", "mushrooms", "cream sauce"], 14),
  new menuItems("Duck Confit", ["duck", "herbs", "potatoes"], 16),
  new menuItems("Vegetable Paella", ["rice", "saffron", "vegetables"], 14),
  new menuItems("Lamb Chops", ["lamb", "rosemary", "potatoes"], 18),
  new menuItems("Ratatouille", ["eggplant", "zucchini", "tomatoes"], 12),
  new menuItems("Grilled Salmon", ["salmon", "lemon", "dill"], 15)
];


export { breakfasts, salads, pastries, desserts, beverages, specialties };