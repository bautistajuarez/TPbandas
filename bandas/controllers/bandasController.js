let bandasList = require("../db/index");

let controller = {

    index : function (req,res) {
        return res.render("listadoBandas" , { bandasList : bandasList.lista});
    },

    id : function (req,res) {
        bandasID = req.params.id;
        resultado = []

        for (let i = 0; i < bandasList.lista.length; i++) {
            
            if (bandasID == bandasList.lista[i].id) {
                resultado.push(bandasList.lista[i]);
            }

        } if (resultado.length === 0) {
            return res.send("id no existente")
        } else{
            return res.render("detalleBandas" , {resultado : resultado});


    }},

    genero : function(req, res) {
        generoID = req.params.genero;
        resultado = [];
    
        for (let i = 0; i < bandasList.lista.length; i++) {
            if (generoID === bandasList.lista[i].genero) {
                resultado.push(bandasList.lista[i]);
            }
        } if (resultado.length === 0) {
            return res.send("genero no existente");
        } else {
            return res.render("generosBandas" , {resultado : resultado});
        }
    }
    
    }


module.exports = controller;

