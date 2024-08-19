// Scroll
var namesToIgnore = ['']; // Your IG username
var images = document.querySelectorAll('img[alt]');
var matchingImages = Array.from(images).filter(img => {

    if( namesToIgnore.includes(img.alt.split("'")[0] )){
        return false;
    }

    return /^.+?'s profile picture$/.test(img.alt);
});

// Get all User DIVS
var usernames = [];
for(let img of matchingImages){
    usernames.push(img.getAttribute("alt").split("'")[0]);
}

console.log(usernames);