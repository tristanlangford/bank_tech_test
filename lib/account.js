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

    Account.prototype.deposit = function(integer) {
        this._record.push(integer)
    }

    Account.prototype.withdraw = function(integer) {
        this._record.push(integer)
    }

    module.exports = Account
})(this)