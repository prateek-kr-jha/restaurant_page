import './home.css';

const home = () => {
    const cover_text = document.createElement('div');
    cover_text.classList.add("cover-text");
    const heading = document.createElement('h1');
    heading.innerText = `PJ's Ice_cream Parlour`;
    const description = document.createElement('p');
    description.innerText = "Where sweetness meets memories";
    cover_text.appendChild(heading);
    cover_text.appendChild(description);
    return cover_text;
}

export { home }
