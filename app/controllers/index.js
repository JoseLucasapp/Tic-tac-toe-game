module.exports.index_to_game = (application, req, res)=>{
    res.render('index');
}

module.exports.game = (application, req, res)=>{
    let background = req.body.backgroundname;
    if(background === null || background === undefined || background === ''){
        background = 'gray';
    }
    res.render('game',{background: "background-color:"+background+";" });
}