
var toggler = document.querySelector('.nav_toggler');
var navmenu = document.querySelector('.navwrapper');

toggler.addEventListener('click', function () {
    navmenu.classList.toggle('showMenuOnMobile')
    this.children[0].classList.toggle('la-times')
})
