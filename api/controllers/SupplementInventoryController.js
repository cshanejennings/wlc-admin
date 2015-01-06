/**
 * SupplementInventoryController
 *
 * @description :: Server-side logic for managing Supplementinventories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var path = require('path');
module.exports = {

  /**
   * `SupplementInventoryController.create()`
   */
  create: function (req, res) {
    CSVService.get_supplements(req, res);
  },


  /**
   * `SupplementInventoryController.load()`
   */
  load: function (req, res) {
    CSVService.load(req, res);
  }
};
/*
module.exports = {
  create: function (req, res) {
    res.send({
      foo: req.body.foo
    });
  },
  load: function (req, res) {
    res.send({
      "data": {
        "stuff": "mine"
      }
    });
  }
}
*/