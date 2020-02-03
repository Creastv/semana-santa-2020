





var wraper = document.getElementById("grad");
var imgHero = document.getElementById("img-hero");
var searchContainer = document.getElementById("searchContainer");
var logoScroll = document.getElementById('logo-scroll');
var scrollTop = document.getElementById('scroll-top');
var pixels = document.body.scrollTop || document.documentElement.scrollTop;
// searchBtn.addEventListener('click', function(){
//     searchInput.classList.remove('search-close');
// });
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;


wraper.style.background = `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(1, 48, 109, 1) 400%`;
var index = 100;
// searchContainer.style.WebkitTransform = `translate (0, -60px)`;
searchContainer.style.marginTop = `-80px`
window.addEventListener("scroll", function(){
    var pixels = document.body.scrollTop || document.documentElement.scrollTop;
    wraper.style.background = `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(1, 48, 109, 1)  ${400 - pixels * 1.2}%`;
    imgHero.style.borderBottomLeftRadius = `  ${60 - pixels /2  }%  600px`;
    imgHero.style.borderBottomRightRadius = `  ${60 - pixels  /2  }%  600px`;
    if (pixels <= (160 - 70)) {
        // searchContainer.style.transform = `translate(0, -${80 + pixels}px)`;
        searchContainer.style.marginTop = `-${80 + pixels}px`;
    } else {
        // searchContainer.style.transform = `translate(0, -160px)`;
        if (viewportWidth > 768) {
            searchContainer.style.marginTop = `-130px`;
        } else {
            searchContainer.style.marginTop = `20px`;
        }

       
    }
    if (pixels >= 100){
        logoScroll.classList.add('logo-scroll-active');
        scrollTop.classList.add('scroll-top-active')
    } else if (pixels <= 100) {
        logoScroll.classList.remove('logo-scroll-active');
        scrollTop.classList.remove('scroll-top-active');
    }
    // searchContainer.style.background = `red`;
});


// on load page gose to top
function goToTop(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};
goToTop();
// sroll to top button
scrollTop.addEventListener('click', goToTop);



var toggle = document.getElementById('toggle');
var abanico = document.getElementById('abanico');
var logo = document.getElementById('logo');
toggle.addEventListener('click', function(){
    abanico.classList.toggle('abanico-open');
    logoScroll.classList.toggle('logo-scroll-active');
    document.body.classList.toggle('overflow-hidden');

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



