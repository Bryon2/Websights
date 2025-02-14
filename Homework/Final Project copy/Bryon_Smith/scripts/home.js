// ---------------------------------------------------- //
// -------- Person -------- //
var person ={
    name:"Bryon Smith",
    age:20,
    hobbies:["Dancing", "Watching Anime", "Dancing"],
    displayinfo: function(){
        return "Name:    " + person.name + "<br>"+
               "Age:     " + person.age  + "<br>"+
               "Hobbie:  " + person.hobbies.join(", ");
    }
};

function renderPersonalInfo(){
    var personalInfo= document.getElementById("personInfo");
    personalInfo.innerHTML="<h2> Person Info</h2>" + person.displayinfo();
}

renderPersonalInfo();
// -------- Person -------- //
// -------- favorites -------- //
var favorites = {
    favoriteAnimals:["Panda","Red Panda", "Raccoon"],
    favoriteMusic:["Rap", "Soul", "Jazz"],
    favoriteTeams:["Denver Broncos", "Cincinnati Bengals", "San Antonio Spurs"],
    displayFavorites: function(){
        return "Favorite Animals:    " + favorites.favoriteAnimals.join(", ") + "<br>"+
               "Favorite Music:       " + favorites.favoriteMusic.join(", ")   + "<br>"+
               "Favorite Teams:      " + favorites.favoriteTeams.join(", ");
    }
};

function renderFavoritesInfo(){
    var FavoritesInfo= document.getElementById("favoritesInfo");
    FavoritesInfo.innerHTML="<h2> Favorites Info</h2>" + favorites.displayFavorites();
}

renderFavoritesInfo();
// -------- favorites -------- //
// -------- element creation -------- //
function createHeadings(text){
    var heading = document.createElement("h2");
    heading.textContent = text;
    return heading;
}
function createParagraph(text){
    var paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

// -------- element creation -------- //
// -------- article popu -------- //
//populat the article with heading, paragraph
function populatArticle(articleId , headingText, paragraphText){
    var article = document.getElementById(articleId);
    var heading   = createHeadings(headingText);
    var paragraph = createParagraph(paragraphText);

    article.appendChild(heading);
    article.appendChild(paragraph);
}

populatArticle("personInfo",    "About Me",      "Bryon Smith is a third year IT Cybersecurity major at Wright State University with a goal of entering the field of Digital Forensics. Alongside his studies, Bryon has taken on multiple leadership roles, working as a Resident Assistant and an Admissions Ambassador. He’s also holding positions as Co-President of the National Society of Black Engineers and Secretary of Engineers Without Borders. He’s also an active member of Black Men On The Move. Through his academic and extracurricular commitments, Bryon is committed to using his technical skills and leadership experience, contribute to the field of digital forensics while supporting his community.");
populatArticle("favoritesInfo", "My Favorities", "Dynamic IT and Cybersecurity student with a strong background in campus engagement and sales, complemented by proficient skills in Python coding and network functions. Proven ability to deliver exceptional campus tours while effectively ensuring resident safety and driving sales performance. Experienced Secretary Officer for Engineers Without Borders and Black Men On The Move, demonstrating leadership and organizational prowess. Committed to continuous learning and collaboration, seeking opportunities to apply technical expertise and contribute to innovative IT projects.");
// -------- article popu -------- //
