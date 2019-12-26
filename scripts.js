
const selectElement = function (element) {
    return document.querySelector(element);
};



//Open and close nav on click
let menuIcon = selectElement('.menu-icons');
let nav = selectElement('nav');

menuIcon.addEventListener('click', function () {
nav.classList.toggle('active');
});
