import "./about.css";
const about = () => {
    const cover_text = document.createElement('div');
    cover_text.classList.add("about-text");
    const heading = document.createElement('h1');
    heading.innerText = `PJ's Ice Cream Parlor: A Sweet Journey`;
    const description = document.createElement('p');
    description.innerText = `PJ's Ice Cream Parlor was born from the passion for crafting exceptional frozen treats and providing a welcoming space for the community to indulge in sweet moments.

    The story began in 2008 when best friends and ice cream enthusiasts, Emily and David, decided to turn their shared love for frozen desserts into a business venture. With a vision to create a parlour that offered not only delicious ice cream but also a warm and inviting atmosphere, they set out on their entrepreneurial journey.
    
    Starting from humble beginnings in a small storefront in the heart of the town, Frozen Delights quickly gained popularity among locals and visitors alike. Word spread about their handcrafted ice cream made from the finest ingredients, innovative flavors, and delightful sundaes that became a hit among customers of all ages.
    
    As the years went by, Frozen Delights expanded its offerings to cater to diverse tastes and preferences, introducing premium flavors, specialty sundaes, and a variety of frozen treats to its menu. The parlour became known not only for its delicious ice cream but also for its commitment to quality, creativity, and exceptional customer service.
    
    With each scoop served, Frozen Delights continued to grow, becoming a beloved destination for families, friends, and ice cream enthusiasts to gather and create cherished memories. Today, Frozen Delights Ice Cream Parlor stands as a testament to the dream of two friends who turned their passion into a thriving business, spreading joy, sweetness, and happiness, one scoop at a time.`;
    cover_text.appendChild(heading);
    cover_text.appendChild(description);
    return cover_text;
}

export {
    about
}