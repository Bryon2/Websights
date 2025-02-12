// first object
var person = {
    name:"Your Name",
    age:999,
    hobbies:["hobby 1", "hobby 2", "hobby 3"],
    displayinfo: function(){
        return "Name:    " + person.name + "<br>"+
               "Age:     " + person.age  + "<br>"+
               "Hobbie:  " + person.hobbies.join(", ");
    }
};
var favorites = {
    favoriteAnimals:["favorite 1","favorite 2", "favorite 3"],
    favoriteMusic:["Music 1", "Music 2" , "Music 3"],
    favoriteTeams:["Team 1", "Team 2", "Team 3"],
    displayFavorites: function(){
        return "Favorite Animals:    " + favorites.favoriteAnimals.join(", ") + "<br>"+
               "FavoriteMusic:       " + favorites.favoriteMusic.join(", ")   + "<br>"+
               "Favorite Teams:      " + favorites.favoriteTeams.join(", ");
    }
};
function renderPersonalInfo(){
    var personalInfo= document.getElementById("personInfo");
    personalInfo.innerHTML="<h2> Person Info</h2>" + person.displayinfo();
}
function renderFavoritesInfo(){
    var FavoritesInfo= document.getElementById("favoritesInfo");
    FavoritesInfo.innerHTML="<h2> Favorites Info</h2>" + favorites.displayFavorites();
}
renderPersonalInfo();
renderFavoritesInfo();
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
//populat the article with heading, paragraph
function populatArticle(articleId , headingText, paragraphText){
    var article = document.getElementById(articleId);
    var heading   = createHeadings(headingText);
    var paragraph = createParagraph(paragraphText);

    article.appendChild(heading);
    article.appendChild(paragraph);
}

populatArticle("personInfo",    "About Me",      "Personal Information");
populatArticle("favoritesInfo", "My Favorities", "Additional Information");

function updateFooter(){
   var footer =  document.querySelector("footer");
   var currentYear = new Date().getFullYear();
   footer.textContent = "\u00A9 " + currentYear + "Replace with your name || WSU. All rights reserved.";
}

updateFooter();

