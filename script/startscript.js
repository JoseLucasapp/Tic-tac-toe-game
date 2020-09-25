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
changeBackgroundbefore = () =>{
    document.body.style.backgroundImage = url('../img/space.gif');
    document.body.style.backgroundPosition ='center';
    document.body.style.backgroundSize = '100%';
}
changeBackgroundafter = () =>{
    document.body.style.backgroundImage = url("../img/wather.gif");
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = '100%';
}