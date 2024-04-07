import "./menu.css";

const menu = () => {
    console.log("hrllo this is about me");
    let div = document.createElement("div");
    div.classList.add("menu-text");
    const menu_list = [
        {
            title: "Scoops & Cones",
            items: ["Single Scoop Cone","Double Scoop Cone", "Waffle Cone Upgrade","Sugar Cone Upgrade"]
        },
        {
            title: "Classic Flavors",
            items: ["Vanilla Bean", "Cookies & Cream", "Mint Chocolate Chip", "Strawberry Dream", "Chocolate Fudge"]
        },
        {
            title: "Specialty Sundaes",
            items: ["Ice Cream Sandwiches","Ice Cream Floats (Root Beer, Coke, Sprite)","Sorbet Cups (Mango, Raspberry, Lemon)"]
        },
        {
            title: "Extras & Toppings",
            items: ["Caramel Sauce","Whipped Cream","Sprinkles (Rainbow, Chocolate, Caramel)","Nuts (Almonds, Walnuts, Pecans)","Fresh Fruit (Strawberries, Bananas, Pineapple)"]
        },
        {
            title: "Beverages",
            items: ["Milkshakes (Vanilla, Chocolate, Strawberry)","Italian Sodas (Various Flavors)","Bottled Water","Soft Drinks"]
        },
        {
            title: "Kids' Favorites",
            items: ["Mini Ice Cream Cones", "Ice Cream Cups with Gummy Bears","Rainbow Sprinkle Cones","Chocolate Dipped Cones","Marshmallow Topping"]
        }

    ];

    for(let i = 0; i < menu_list.length; i++) {
        const list_div = document.createElement("div");
        list_div.setAttribute("id", `${i}`)
        const list_div_heading = document.createElement("h1");
        list_div_heading.innerText = menu_list[i].title;
        list_div.appendChild(list_div_heading);
        const list = document.createElement("ul");
        // for(let j = 0; j < menu_list[i].items.length; j++) {
        for(const item of menu_list[i].items) {
            const list_element = document.createElement("li");
            console.log(item);
            list_element.innerText = item;
            list.appendChild(list_element);
        }

        list_div.appendChild(list);
        div.appendChild(list_div);
    }



    return div;
}

export {
    menu
}