var connection = require("../config/connection.js");

console.log(connection);

var orm = {
  selectAll: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(
      err,
      result
    ) {
      return result;
    });
  },
  insertOne: function() {},
  updateOne: function() {}
};

module.exports = orm;
