'use strict';

(function(exports) {

    var Account = function() {
        this._balance = 0
    }

    Account.prototype.getBalance = function() {
        return this._balance
    }

    module.exports = Account
})(this)