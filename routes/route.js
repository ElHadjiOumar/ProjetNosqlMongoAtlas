// import express
const express = require('express');
// import  controller
const feedController = require('../controllers/supermarcheController');
// Cree une router
const router = express.Router();
// Definition des routes
router.get('/supermarche', feedController.getSupermarches);
router.get('/supermarche/:id',feedController.getSupermarchesById);
router.get('/supermarche/nombre/branch',feedController.getNbVenteByBranch);
router.get('/supermarche/nombre/city',feedController.getNbVenteByCity);
router.get('/supermarche/nombre/gender',feedController.getNbVenteByGender);
router.get('/supermarche/nombre/productline',feedController.getNbVenteByProduct_line);
router.get('/supermarche/nombre/payement',feedController.getNbVenteByPayment);
router.get('/supermarche/nombre/date',feedController.getNbVenteByDate);

router.get('/supermarche/somme/branch',feedController.getSommeVenteByBranch);
router.get('/supermarche/somme/city',feedController.getSommeVenteByCity);
router.get('/supermarche/somme/gender',feedController.getSommeVenteByGender);
router.get('/supermarche/somme/productline',feedController.getSommeVenteByProduct_line);
router.get('/supermarche/somme/payement',feedController.getSommeVenteByPayment);
router.get('/supermarche/somme/date',feedController.getSommeVenteByDate);

router.get('/supermarche/vente/branch',feedController.getVenteByBranch);
router.get('/supermarche/vente/city',feedController.getVenteByCity);
router.get('/supermarche/vente/gender',feedController.getVenteByGender);
router.get('/supermarche/vente/productline',feedController.getVenteByProduct_line);
router.get('/supermarche/vente/payement',feedController.getVenteByPayment);
router.get('/supermarche/vente/date',feedController.getVenteByDate);

router.get('/supermarche/femaleproductline/heath',feedController.getVenteFemaleProduct_line);

router.get('/supermarche/rating/superieure/egale5',feedController.getRatingsSupeg5);
router.get('/supermarche/rating/inferieure/5',feedController.getRatingsinf5);
router.get('/supermarche/rating/superieur/egale9',feedController.getRatingssupeg9);

// export the router
module.exports = router;