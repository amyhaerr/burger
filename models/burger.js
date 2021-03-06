var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.all("burgers", function (res) {
            callback(res);
        });
    },

    insertOne: function (addon, callback) {
        orm.insertOne("burgers", "burger_name", addon, function (buns) {
            callback(buns);
        });
    },
    updateOne: function (colVal, id, cb) {
        orm.updateOne(colVal, id, function (res) {
            cb(res);
        });

    }

};

module.exports = burger;