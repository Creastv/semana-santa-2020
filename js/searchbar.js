var meals = [
    {
        id: 1,
        title: 'Pino Montano',
        direction: 'Capilla de Ntra. Sra. de los Ángeles (C/ Recaredo, 19)',
        imagen: 'los-negritos.jpg',
        link: 'pasos/los-negritos.html'
    },

    {
        id: 2,
        title: 'Bendiciín y Esperanza',
        direction: 'Capilla de Ntra. Sra. de los Ángeles (C/ Recaredo, 19)',
        imagen: 'los-negritos.jpg',
        link: 'pasos/los-negritos.html'
    },
    {
        id: 3,
        title: 'Los Negritos',
        direction: 'Capilla de Ntra. Sra. de los Ángeles (C/ Recaredo, 19)',
        imagen: 'los-negritos.jpg',
        link: 'pasos/los-negritos.html'
    },
    {
        id: 4,
        title: 'Pino Montano',
        direction: 'Capilla de Ntra. Sra. de los Ángeles (C/ Recaredo, 19)',
        imagen: 'los-negritos.jpg',
        link: 'pasos/los-negritos.html'
    },

    {
        id: 5,
        title: 'Bendiciín y Esperanza',
        direction: 'Capilla de Ntra. Sra. de los Ángeles (C/ Recaredo, 19)',
        imagen: 'los-negritos.jpg',
        link: 'pasos/los-negritos.html'
    },
    {
        id: 6,
        title: 'Los Negritos',
        direction: 'Capilla de Ntra. Sra. de los Ángeles (C/ Recaredo, 19)',
        imagen: 'los-negritos.jpg',
        link: 'pasos/los-negritos.html'
    },
    {
        id: 7,
        title: 'Pino Montano',
        direction: 'Capilla de Ntra. Sra. de los Ángeles (C/ Recaredo, 19)',
        imagen: 'los-negritos.jpg',
        link: 'pasos/los-negritos.html'
    },

    {
        id: 8,
        title: 'Bendiciín y Esperanza',
        direction: 'Capilla de Ntra. Sra. de los Ángeles (C/ Recaredo, 19)',
        imagen: 'los-negritos.jpg',
        link: 'pasos/los-negritos.html'
    },
    {
        id: 9,
        title: 'Los Negritos',
        direction: 'Capilla de Ntra. Sra. de los Ángeles (C/ Recaredo, 19)',
        imagen: 'los-negritos.jpg',
        link: 'pasos/los-negritos.html'
    }
];

var searchField = document.querySelector('#searchInput');
var searchResultsContainer = document.querySelector('#wrapersearchresult');
var searchBtn = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput');
var wraperForm = document.getElementById('wrapSearch');
var bgSearch = document.getElementById('bgSearch');
var closeSearch = document.getElementById('close-search');
var element = document.querySelector('form');
var url = window.location.origin + '/ssbarea/';

element.addEventListener('submit', event => {
    event.preventDefault();
});

searchField.addEventListener('input', (e) => {

    // if input field is empty, clear the search results
    if (e.target.value === '') {
        searchResultsContainer.innerHTML = '';
        return;
    }

    // filter the meals array
    var searchResults = meals.filter(meal => {
        return meal.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    // before displaying the search results, clear the search results div
    searchResultsContainer.innerHTML = '';

    // display the titles of the meal objects that include the text entered in input field
    searchResults.forEach((element, index) => {
        var p = document.createElement('div');
        p.setAttribute('class', 'bar');
        p.innerHTML = `
            <div class="img">
                <a href="${url}${element.link}">
                    <img src="${url}img/insignias/${element.imagen}" alt="${element.title}">
                </a>
            </div>
            <div class="title">
                <a href="${url}${element.link}">
                    <h2>${element.title}</h2>
                    <p>${element.direction}</p>
                </a>
            </div>
            <div class="link">
                <a href="${url}${element.link}" class="btn btn-gold-grad"><i class="fas fa-chevron-right"></i></a>
            </div>
            </div>
        `;
        // p.textContent = (index + 1) + '. ' + element.title + element.img;
        searchResultsContainer.appendChild(p);
    });
});


searchInput.addEventListener('focus', function () {
    searchContainer.classList.add('activSearch');
    // searchContainer.style.marginTop = `0px`;
    wraperForm.style.background = '#b29162';
    searchResultsContainer.style.display = 'block';
    bgSearch.classList.add('bgSearch-open');
    closeSearch.style.display = 'block';
    document.body.classList.add('overflow-hidden');
});


searchInput.addEventListener('blur', function () {
    wraperForm.style.background = '#01306d';
});


bgSearch.addEventListener('click', function(){
    searchContainer.classList.remove('activSearch');
    bgSearch.classList.remove('bgSearch-open');
    searchResultsContainer.style.display = 'none';
    closeSearch.style.display = 'none';
    document.body.classList.remove('overflow-hidden');
});
closeSearch.addEventListener('click', function () {
    searchContainer.classList.remove('activSearch');
    bgSearch.classList.remove('bgSearch-open');
    searchResultsContainer.style.display = 'none';
    closeSearch.style.display = 'none';
    document.body.classList.remove('overflow-hidden');
});