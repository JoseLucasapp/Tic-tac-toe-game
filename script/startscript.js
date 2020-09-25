optionsPageOn = () => {
    let optionspage = document.getElementById('optionspage');
    optionspage.style.zIndex = 1;
    optionspage.style.opacity = 1;
}
optionsPageOff = () => {
    let optionspage = document.getElementById('optionspage');
    optionspage.style.zIndex = -1;
    optionspage.style.opacity = 0;
}