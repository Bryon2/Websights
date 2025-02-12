// Data arrays
const headings = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5", "Image 6"];
const images = ["img_1.png", "img_2.png", "img_3.png", "img_4.png", "img_5.png", "img_6.png"];
const loremDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor. Integer in libero eget arcu efficitur bibendum at ac ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nec eros vehicula, dignissim quam sit amet, lacinia eros.";


// Dynamically populate articleOne with titles, images, and descriptions
const articleOne = document.getElementById('articleOne');
headings.forEach((headingText, index) => {
    const container = document.createElement('div');
    
    const heading = document.createElement('h2');
    heading.textContent = headingText;
    
    const image = document.createElement('img');
    image.src = `images/${images[index]}`;
    image.alt = headingText;
    
    const paragraph = document.createElement('p');
    paragraph.textContent = loremDescription;
    
    container.appendChild(heading);
    container.appendChild(image);
    container.appendChild(paragraph);
    
    articleOne.appendChild(container);
});


const imagesAnimal = ["image_1.png", "image_2.png", "image_3.png", "image_4.png", "image_5.png"];



// Dynamically populate articleTwo with a single row of images
const articleTwo = document.getElementById('articleTwo');
imagesAnimal.forEach((imgSrc) => {
    const image = document.createElement('img');
    image.src = `images/${imgSrc}`;
    image.alt = "Gallery Image";
    articleTwo.appendChild(image);
});

// Update footer with the current year
document.getElementById('currentYear').textContent = new Date().getFullYear();
