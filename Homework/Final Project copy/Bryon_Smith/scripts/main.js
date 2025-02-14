    // -------- nav -------- //
    var parentElement = document.querySelector('nav'); 

    var ul = document.createElement('ul');
    ul.classList.add('MenuLinks');

    var links = [
        { href: './index.html', text: 'Home' },
        { href: './registration.html', text: 'Registration' },
        { href: './interests.html', text: 'Interests' }
    ];

    links.forEach(link => {
        var li = document.createElement('li'); 
        var a = document.createElement('a');   
        a.href = link.href;                      
        a.textContent = link.text;               
        li.appendChild(a);                       
        ul.appendChild(li);                      
    });

    parentElement.appendChild(ul);

    // -------- nav -------- //

    // -------- footer -------- //
function updateFooter(){
   var footer =  document.querySelector("footer");
   var currentYear = new Date().getFullYear();
   footer.textContent = "\u00A9 " + currentYear + " Bryon S || WSU. All rights reserved.";
}

updateFooter();
// -------- footer -------- //