  //import express
const express = require('express');
// import mangoose
const mongoose = require('mongoose');
// import  routes
const supermarcheRoutes = require('./routes/route');
// Creation application express
const app = express();
// Coller le json qui va venir
app.use(express.json());
// La racine des futurs requetes
app.use('/', supermarcheRoutes);
// Mettre en place une connexion à la base de donnée en utilisant mongoose
// on va coller l'uri donnée par Atlas

mongoose
  .connect( 'mongodb+srv://mbengue:passer123@cluster0.jwc30.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then(result => {
    // ecoute le port 3000
    app.listen(3000);
  })
  .catch(err => console.log('err', err))