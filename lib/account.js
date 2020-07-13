'use strict';

(function(exports) {

    var Account = function() {
        this._balance = 0;
        this._record = []
    }

    Account.prototype.getBalance = function() {
        return this._balance
    }

    Account.prototype.getRecord = function() {
        return this._record
    }

    module.exports = Account
})(this)