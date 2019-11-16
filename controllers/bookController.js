const db = require("../models");

// Defining methods for the bookController
module.exports = {
  // find all function BY RES AND RES PARA METER 
  findAll: function(req, res) {
    // DATABASE BOOK FIND QUERY
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // FIND BY ID FUNCTION REQUESTING PARMS.ID AND RESPOND JSON
  findById: function(req, res) {
    // HIT DTABASE REQUEST ID PARAM
    db.Book.findById(req.params.id)
    //RESPOND JSON DBBOOK
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // CREATE FUNCTION HIT BOOK DATBASE RESPOND JSON BOOK 
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // UPDATE  FUNCTION  HIT DBBOOK FIND BY ID AND  UPDATE 
  update: function(req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // REMOVE FUNCTION HIT BOOKDB FIRST RMOVE AND RES JSON BOOK
  remove: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
