let express = require('express');
const bandas = require("../modulos/bandas.js")
let lista = bandas.lista


let bandasController = {
    index: function (req, res){
        let list = lista
        let listaBanda = []
        for (let i = 0; i<lista.length;i++){
            listaBanda.push(lista[i].nombre);
        }

    
        
        return res.render("bandas",  {listaBanda:listaBanda , list:list})
    },
    porId: function (req, res){
        let param = req.params.id;
        let bandNombre;
        let bandIndex;
        for (let i = 0; i < lista.length; i++) {
            if (param == lista[i].id) {
                bandIndex = i
                bandNombre = lista[i].nombre
                
            }
            
        }
        res.render("bandasId", {param, bandIndex, bandNombre, lista})








    }}

    
    
    

module.exports = bandasController