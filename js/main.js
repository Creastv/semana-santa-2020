

var wraper = document.getElementById("grad");
var imgHero = document.getElementById("img-hero");
var searchContainer = document.getElementById("searchContainer");
var pixels = document.body.scrollTop || document.documentElement.scrollTop;
// searchBtn.addEventListener('click', function(){
//     searchInput.classList.remove('search-close');
// });












wraper.style.background = `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(1, 48, 109, 1) 400%`;
var index = 100;
searchContainer.style.WebkitTransform = `translate (0, -60px)`;
window.addEventListener("scroll", function(){
    var pixels = document.body.scrollTop || document.documentElement.scrollTop;
    wraper.style.background = `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(1, 48, 109, 1)  ${400 - pixels * 1.2}%`;
    imgHero.style.borderBottomLeftRadius = `  ${60 - pixels /2  }%  600px`;
    imgHero.style.borderBottomRightRadius = `  ${60 - pixels  /2  }%  600px`;
    if (pixels <= (160 - 70)) {
        searchContainer.style.transform = `translate(0, -${80 + pixels}px)`;
    } else {
        searchContainer.style.transform = `translate(0, -160px)`;
    }
    // searchContainer.style.background = `red`;
});




var toggle = document.getElementById('toggle');
var abanico = document.getElementById('abanico');
var logo = document.getElementById('logo');
toggle.addEventListener('click', function(){
    abanico.classList.toggle('abanico-open');

    var li = [...document.querySelectorAll('#abanico nav ul li')];
    var index = 0;
    setTimeout(function () {
        window.setInterval(function () {
            if (index < li.length) {
                li[index++].classList.toggle('liVisible');
            }
        }, 100);
    }, 500);
    setTimeout(function () {
        logo.classList.toggle('logo-visible');
    }, 300);
    
});



