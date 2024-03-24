let bandasList = require("../db/index")

let controller = {

    index: function (req , res) {
        
        return res.render("listadoBandas" , { bandasList : bandasList.lista});

    }





}

module.exports = controller;