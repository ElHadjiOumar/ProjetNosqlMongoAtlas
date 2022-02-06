// import Supermarche Model
const Supermarche = require("../models/supermarche");

exports.getSupermarches = (req, res, next) => {
    Supermarche.find().then(foundSupermarches => {
      res.json({
        message: "All supermarches",
        supermarches: foundSupermarches
      });
    });
  }

  exports.getSupermarchesById = (req, res, next) => {
    Supermarche.findById(req.params.id).then(foundSupermarches => {
      res.json({
        message: "Recherce par ID",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getNbVenteByBranch = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Branch",Total:{$sum:1}} }]).then(foundSupermarches => {
      res.json({
        message: "Nombre total vente par branch",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getNbVenteByCity = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$City",Total:{$sum:1}} }]).then(foundSupermarches => {
      res.json({
        message: "Nombre total vente par city",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getNbVenteByGender = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Gender",Total:{$sum:1}} }]).then(foundSupermarches => {
      res.json({
        message: "Nombre total vente par Gender",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getNbVenteByProduct_line = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Product_line",Total:{$sum:1}} }]).then(foundSupermarches => {
      res.json({
        message: "Nombre total vente par Product_line",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getNbVenteByPayment = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Payment",Total:{$sum:1}} }]).then(foundSupermarches => {
      res.json({
        message: "Nombre total vente par Payment",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getNbVenteByDate = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Date",Total:{$sum:1}} }]).then(foundSupermarches => {
      res.json({
        message: "Nombre total vente par Date",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getSommeVenteByBranch = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Branch",Total:{$sum:'$Quantity'}} }]).then(foundSupermarches => {
      res.json({
        message: "Somme produit vendu par Branch",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getSommeVenteByCity = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$City",Total:{$sum:'$Quantity'}} }]).then(foundSupermarches => {
      res.json({
        message: "Somme produit vendu par City",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getSommeVenteByGender = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Gender",Total:{$sum:'$Quantity'}} }]).then(foundSupermarches => {
      res.json({
        message: "Somme produit vendu par Gender",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getSommeVenteByProduct_line = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Product_line",Total:{$sum:'$Quantity'}} }]).then(foundSupermarches => {
      res.json({
        message: "Somme produit vendu par Product_line",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getSommeVenteByPayment = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Payment",Total:{$sum:'$Quantity'}} }]).then(foundSupermarches => {
      res.json({
        message: "Somme produit vendu par Payment",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getSommeVenteByDate = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Date",Total:{$sum:'$Quantity'}} }]).then(foundSupermarches => {
      res.json({
        message: "Somme produit vendu par Date",
        supermarches: foundSupermarches
      });
    });
  }

  exports.getVenteByBranch = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Branch",Total:{$sum:'$Total'}} }]).then(foundSupermarches => {
      res.json({
        message: "Vente Totale effectué par Branch",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getVenteByCity = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$City",Total:{$sum:'$Total'}} }]).then(foundSupermarches => {
      res.json({
        message: "Vente Totale effectué par City",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getVenteByGender = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Gender",Total:{$sum:'$Total'}} }]).then(foundSupermarches => {
      res.json({
        message: "Vente Totale effectué par Gender",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getVenteByProduct_line = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Product_line",Total:{$sum:'$Total'}} }]).then(foundSupermarches => {
      res.json({
        message: "Vente Totale effectué par Product_line",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getVenteByPayment = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Payment",Total:{$sum:'$Total'}} }]).then(foundSupermarches => {
      res.json({
        message: "Vente Totale effectué par Payment",
        supermarches: foundSupermarches
        });
    });
  }
  exports.getVenteByDate = (req, res, next) => {
    Supermarche.aggregate([{ $group: { _id: "$Date",Total:{$sum:'$Total'}} }]).then(foundSupermarches => {
      res.json({
        message: "Vente Totale effectué par Date",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getVenteFemaleProduct_line = (req, res, next) => {
    Supermarche.aggregate([ { $match: { Gender: "Female" ,Product_line:"Health and beauty"}}, { $group: { _id: null, total: { $sum: 1} } }]).then(foundSupermarches => {
      res.json({
        message: "Nombre de femme qui achete des produits de categories Health and beauty",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getRatingsSupeg5 = (req, res, next) => {
    Supermarche.aggregate([ { $match: { Rating : {$gte : 5}}}, { $group: { _id: null, total: { $sum: 1} } }]).then(foundSupermarches => {
      res.json({
        message: "Nombre de vente avec des notes superieure ou egale à 5/10",
        supermarches: foundSupermarches
      });
    });
  }
  exports.getRatingsinf5 = (req, res, next) => {
    Supermarche.aggregate([ { $match: { Rating : {$lt : 5}}}, { $group: { _id: null, total: { $sum: 1} } }]).then(foundSupermarches => {
      res.json({
        message: "Nombre de vente avec des notes inférieure à 5/10",
        supermarches: foundSupermarches
      });
    });
  }

  exports.getRatingssupeg9 = (req, res, next) => {
    Supermarche.aggregate([ { $match: { Rating : {$gte : 9}}}, { $group: { _id: null, total: { $sum: 1} } }]).then(foundSupermarches => {
      res.json({
        message: "Nombre de vente avec des notes inférieure à 9/10",
        supermarches: foundSupermarches
      });
    });
  }

 