let choice = 0;
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
changeBg = ()=>{
    let colors = ['BFC837','2DAB16', '881679', 'CCBDCA', '83837F']
    let body = document.body;
    let inpBack = document.getElementById('backgroundname');
    body.style.backgroundColor = '#' + colors[choice];
    inpBack.value = '#' + colors[choice];
    choice++;
    if(choice >= colors.length)choice = 0;
}