optionsPageOn = () => {
    let optionspage = document.getElementById('optionspage');
    optionspage.style.zIndex = 1;
    optionspage.style.opacity = 1;
    optionspage.style.display = "inline";
}
optionsPageOff = () => {
    let optionspage = document.getElementById('optionspage');
    optionspage.style.zIndex = -1;
    optionspage.style.opacity = 0;
    optionspage.style.display = "none";
}