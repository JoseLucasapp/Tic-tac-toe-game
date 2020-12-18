const app = require("../../config/server");

module.exports = (application)=>{
    application.get('/',(req,res)=>{
        application.app.controllers.index.index_to_game(application, req, res);
    });

    application.get('/game', (req, res)=>{
        application.app.controllers.index.game(application, req, res);
    });
}