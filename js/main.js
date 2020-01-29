var searchBtn = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', function(){
    searchInput.classList.remove('search-close');
    console.log('test');
});