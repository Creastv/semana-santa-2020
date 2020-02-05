





var wraper = document.getElementById("grad");
var imgHero = document.getElementById("img-hero");
var searchContainer = document.getElementById("searchContainer");
var logoScroll = document.getElementById('logo-scroll');
var scrollTop = document.getElementById('scroll-top');
var compartir = document.getElementById('compartir');
var backToSearch = document.getElementById('backToSearch');
var pixels = document.body.scrollTop || document.documentElement.scrollTop;
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;


wraper.style.background = `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(1, 48, 109, 1) 400%`;
var index = 100;


window.addEventListener("scroll", function(){
    var pixels = document.body.scrollTop || document.documentElement.scrollTop;
    wraper.style.background = `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(1, 48, 109, 1)  ${400 - pixels * 1.2}%`;

    if (pixels >= 100){
        logoScroll.classList.add('logo-scroll-active');
        scrollTop.classList.add('scroll-top-active');
        compartir.classList.add('compartir-active');
        imgHero.style.borderBottomLeftRadius = `60%  0px`;
        imgHero.style.borderBottomRightRadius = `60%  0px`;
        
       
    } else if (pixels <= 100) {
        logoScroll.classList.remove('logo-scroll-active');
        scrollTop.classList.remove('scroll-top-active');
        compartir.classList.remove('compartir-active');
        searchContainer.style.marginTop = `-80px`;
        imgHero.style.borderBottomLeftRadius = `60%  600px`;
        imgHero.style.borderBottomRightRadius = `60%  600px`;
    };

    if (pixels >= 500) {
        backToSearch.classList.add('backToSearch-active');
        toggle.style.right = '46px';  
    } else {
        toggle.style.right = '10px';
        backToSearch.classList.remove('backToSearch-active');
    }
});


backToSearch.addEventListener('click', function () {
    searchContainer.classList.add('activSearch');
    // searchContainer.style.marginTop = `0px`;
    wraperForm.style.background = '#b29162';
    searchResultsContainer.style.display = 'block';
    bgSearch.classList.add('bgSearch-open');
    closeSearch.style.display = 'block';
    document.body.classList.add('overflow-hidden');
    console.log('test')
});

// on load page gose to top
function goToTop(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};
// goToTop();
// sroll to top button
scrollTop.addEventListener('click', goToTop);



var toggle = document.getElementById('toggle');
var abanico = document.getElementById('abanico');
var logo = document.getElementById('logo');
var textToggle = document.querySelector('#toggle span');
var iconToggle = document.querySelector('#toggle i');

toggle.addEventListener('click', function(){
    abanico.classList.toggle('abanico-open');
    document.body.classList.toggle('overflow-hidden');
    backToSearch.classList.remove('backToSearch-active');
    toggle.style.right = '10px';
    if (textToggle.innerHTML == "Cerar") {
        textToggle.innerHTML = "Menu";
        iconToggle.className = "fas fa-bars";

    }
    else {
        textToggle.innerHTML = "Cerar";
        iconToggle.className = "fas fa-times";
    }

    var li = [...document.querySelectorAll('#abanico nav ul li')];
    var index = 0;
    setTimeout(function () {
        window.setInterval(function () {
            if (index < li.length) {
                li[index++].classList.toggle('liVisible');
            }
        }, 100);
    }, 500);
    // logoScroll.classList.toggle('logo-scroll-active');

    // setTimeout(function () {
    //     logo.classList.toggle('logo-visible');
    // }, 300);
    
});




