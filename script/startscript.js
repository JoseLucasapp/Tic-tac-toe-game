click = 0;
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
    backgrounds = ['../img/space.gif','../img/sky.gif','../img/earth.gif'];
    click ++;
    if(click >= 2){
        click = 2;
    }
    document.body.style.backgroundImage = url('../img/space.gif');
    document.body.style.backgroundPosition ='center';
    document.body.style.backgroundSize = '100%';
}
changeBackgroundafter = () =>{
    backgrounds = ['../img/space.gif','../img/sky.gif','../img/earth.gif'];
    click --;
    if(click <= 0){
        click = 0;
    }
    document.body.style.backgroundImage = url("../img/space.gif");
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 100+'%';
}