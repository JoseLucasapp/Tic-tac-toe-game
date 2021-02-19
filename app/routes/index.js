module.exports = (application)=>{
    application.get('/',(req,res)=>{
        require('../controllers/index').index_to_game(application, req, res);
    });

    application.post('/game', (req, res)=>{
        require('../controllers/index').game(application, req, res);
    });
}