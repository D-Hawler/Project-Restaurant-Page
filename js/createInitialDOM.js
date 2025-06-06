function homemade() {
    const content = document.querySelector("#content");
    content.replaceChildren();
    content.classList.remove("contentGrid");

    const homeTitle = document.createElement("div");
    homeTitle.classList.add("homeTitle");

    content.appendChild(homeTitle);

    const img = document.createElement("img");
    img.setAttribute("src", "./img/interior.jpg");
    img.classList.add("homeImg");

    homeTitle.appendChild(img);

    const div = document.createElement("div");
    homeTitle.appendChild(div);

    const h1 = document.createElement("h1");
    h1.textContent = "About our cafe";

    div.appendChild(h1);
    const text0 = [
        "Cozy Caffee is a small corner of coziness and warmth in the heart of your city. We opened to give our guests an atmosphere of comfort and tranquility, where everyone can relax from the hustle and bustle of the city, enjoy your favorite dishes and drinks, spend time with friends or be alone with yourself.",
        "We are proud of our diverse menu: from hearty breakfasts and fresh salads to appetizing desserts and flavorful pastries, prepared with care and love. Each of our drinks, be it a cup of hot chocolate or a cappuccino with thick foam, warms the soul and brings a smile.",
        "The interior of our cafe is made in warm, pleasant tones - from delicate peach to rich pumpkin color, creating an atmosphere of home comfort. Attention to details, friendly staff and care about every guest is our pride and business card.",
        "We love our guests and try to make every visit special. Our cafe is always cozy - here you will find not only delicious food and drinks, but also an opportunity to relax, be charged with positivity and enjoy the warmth of our team.",
        "Come and visit us at Cozy Caffee and feel the cozy atmosphere like at home. You are always welcome!"
    ];

    for (let i = 0; i < 5; i++) {
        const p = document.createElement("p");
        p.textContent = text0[i];
        div.appendChild(p);
    };

    const mission = document.createElement("h2");
    mission.textContent = "Our values and mission";

    content.appendChild(mission);
    const text1 = [
        "We believe that good coffee and delicious food can connect people, energize them and create unforgettable memories.",
        "Our mission is not just to feed and feed our guests, but to create a space for warm meetings: business meetings, friendly gatherings or a quiet evening with a book.",
        "Hospitality: it is important for us that everyone - from a child to an elderly person - feels care and attention. Our baristas and waiters are always happy to smile, tell you what's new on the menu and help you with your choices.",
        "Sustainability: we minimize plastic - paper straws and bamboo cups are used for take-out only. All waste is recycled and leftover food is recycled or sent to composting whenever possible.",
        "Local: partnering with local farmers and small producers allows us to support the community and ensure the freshness of every ingredient."
    ];

    for (let i = 0; i < 5; i++) {
        const p = document.createElement("p");
        p.textContent = text1[i];
        content.appendChild(p);
    };

    const events = document.createElement("h2");
    events.textContent = "Events & Community";

    content.appendChild(events);
    const text2 = [
        "Cozy Caffee regularly hosts themed evenings and workshops:",
        "Coffee tastings: our head barista will talk about the origin of the beans, roasting methods and brewing nuances.",
        "Dessert workshops: learn how to bake homemade muffins, make cheesecake or assemble a fruit tart.",
        "Live acoustic music evenings: on Saturday evenings we invite local musicians and guests can enjoy live performances under the warm glow of lamps.",
        "Book clubs and creative evenings: every last Wednesday of the month we bring together literature lovers to discuss a book over a cup of coffee.",
        "We also host regular charity breakfasts, with a portion of the proceeds going to support animal shelters and local orphanages.",
    ];

    for (let i = 0; i < 5; i++) {
        const p = document.createElement("p");
        p.textContent = text2[i];
        content.appendChild(p);
    };

    const team = document.createElement("h2");
    team.textContent = "Team";

    content.appendChild(team);
    const text3 = [
        "Behind every dish and drink is our friendly team:",
        "Baristas: professionals trained in the best coffee schools. They not only prepare coffee, but also try to understand the tastes of each guest.",
        "Bakers and confectioners: young talents who put their heart into each dessert so that it not only looks appetizing, but also gives joy from the first bite.",
        "Waiters: smiling guys and girls for whom every meeting with a client is an opportunity to make someone's day a little brighter.",
        "Managers and founders: Ivan and Alexey are the heart and soul of the project, constantly improving the concept, inventing new dishes and making sure that the atmosphere remains really cozy."
    ];

    for (let i = 0; i < 5; i++) {
        const p = document.createElement("p");
        p.textContent = text3[i];
        content.appendChild(p);
    };
};
homemade();


document.querySelector("#homeMade").addEventListener("click", () => {
    homemade();
});


function contactMade() {
    const content = document.querySelector("#content");
    content.replaceChildren();
    content.classList.remove("contentGrid");
    
    content.innerHTML = `<div class="contactTitle">
                <div>
                    <div class="addressCard">
                        <h2>New York — Cozy Caffee Flagship Store</h2>
                        <address>
                            <p>
                                <strong>Address:</strong><br>
                                456 Madison Avenue<br>
                                New York, NY 10022
                            </p>

                            <p><strong>Phone:</strong><br>
                            <a href="#">(212) 555-0123</a><br>
                            <a href="#">(917) 555-0198</a></p>

                            <p><strong>Email:</strong><br>
                            <a href="#">ny@cozycaffee.com</a></p>
                        </address>
                    </div>
                    <div class="addressCard">
                        <h2>Chicago — Cozy Caffee</h2>
                        <address>
                            <p>
                                <strong>Address:</strong><br>
                                789 North Clark Street<br>
                                Chicago, IL 60654
                            </p>

                            <p><strong>Phone:</strong><br>
                            <a href="#">(312) 555-0175</a><br>
                            <a href="#">(773) 555-0247</a></p>

                            <p><strong>Email:</strong><br>
                            <a href="#">chicago@cozycaffee.com</a></p>
                        </address>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Store Hours</h2>
                        <p>Monday–Friday: 8:00 AM – 8:00 PM<br>
                        Saturday: 9:00 AM – 7:00 PM<br>
                        Sunday: 9:00 AM – 5:00 PM</p>
                    </div>
                    <div>
                        <h2>Store Locations</h2>
                        <a href="#">View all Cozy Caffee locations</a>
                    </div>
                    <div>
                        <h2>Marketing & Media Inquiries</h2>
                        <p>Email: <a href="#">media@cozycaffee.com</a></p>
                    </div>
                </div>
            </div>
            <h1>Service Centers:</h1>
            <div class="serviceTitle">
                <div class="addressCard">
                    <h2>New York Service Center</h2>
                    <address>
                        <p><strong>Address:</strong><br>
                           123 Brew Street, Suite 6/8<br>
                           New York, NY 10001</p>

                        <p><strong>Phone:</strong><br>
                           <a href="#">(212) 555-0456</a><br>
                           <a href="#">(917) 555-0277</a></p>
                    </address>
                </div>
                <div class="addressCard">
                    <h2>Chicago Service Center</h2>
                    <address>
                        <p><strong>Address:</strong><br>
                           1050 Bean Boulevard<br>
                           Chicago, IL 60611</p>

                        <p><strong>Phone:</strong><br>
                           <a href="#">(312) 555-0234</a><br>
                           Mobile: <a href="#">(773) 555-0189</a></p>
                    </address>
                </div>
                <div class="addressCard">
                    <h2>Service Center Hours:</h2>
                    <p>Mon–Fri: 9:00 AM – 5:00 PM<br>
                        Saturday: 10:00 AM – 3:00 PM<br>
                        Sunday: Closed</p>
                </div>
            </div>`;
};


document.querySelector("#contactMade").addEventListener("click", () => {
    contactMade();
});