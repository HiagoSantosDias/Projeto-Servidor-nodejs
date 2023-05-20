const express = require("express");
var fs = require('fs');

const router = express.Router();

router.get("/", (req , res) => {
    res.sendFile(__dirname + "/views/index.html");
});

router.get('/produtos',(req , res) => {
    res.sendFile(__dirname + "/views/produtos.html");
});

router.get('/catalogos',(req , res) => {
    res.sendFile(__dirname + "/views/catalogo.html");
});

router.get('/contatos',(req , res) => {
    res.sendFile(__dirname + "/views/contato.html");
});


router.get('/tipoDocx',(req , res) => {
    res.sendFile("C:/Projeto Servidor/ Servidor/recursos.docx");
});

router.get('/tipoJpeg',(req , res) => {
    res.sendFile("C:/Projeto Servidor/Projeto Servidor/recursos/arquivo.jpeg");
});

router.get('/tipoMp3',(req , res) => {
    res.sendFile("C:/Projeto Servidor/Projeto Servidor/recursos/arquivo.mp3");
});

router.get('/tipoMp4',(req , res) => {
    res.sendFile("C:/Projeto Servidor/Projeto Servidor/recursos/arquivo.mp4");
});

router.get('/tipoJson',(req , res) => {
    res.sendFile("C:/Projeto Servidor/Projeto Servidor/recursos/arquivo.json");
});

router.get('/tipoMd',(req , res) => {
    res.sendFile("C:/Projeto Servidor/Projeto Servidor/recursos/arquivo.md");
});


const index = express();
index.use('/', router);

module.exports = index;