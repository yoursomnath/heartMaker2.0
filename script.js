
function loveYou(){
    ranX = Math.floor(Math.random()*100);
    ranY = Math.floor(Math.random()*100);
    ranHue = Math.floor(Math.random()*360);
    ranZoom= Math.random()*1;
    let randomLove = document.createElement("div");
    randomLove.className = "cont";
    document.body.appendChild(randomLove);        
    var divArray = [];
    
    randomLove.style.left = `${ranX}%`;
    // randomLove.style.top = `${ranY}%`;
    randomLove.style.zoom = `${ranZoom}`;
    randomLove.style.filter = `hue-rotate(${ranHue}deg)`;
    document.addEventListener("keydown", handleKeyPress);
    function handleKeyPress(event) {
        // Check if the pressed key is "k" (key code 75)
        if (event.key === 'k') {
            // Call your function here
            randomLove.style.display = "none";
        }
    }

} 
setInterval(loveYou,100);