'use strict';

(function (exports) {

    var Interaction = require('./account_interaction')
    var Statement = require('./statement')

    function Account() {
        this._balance = 0;
        this._record = [];
        this._interactionClass = Interaction
        this._statement = Statement
    }

    Account.prototype.getBalance = function() {
        return this._balance
    }

    Account.prototype.getRecord = function() {
        return this._record
    }

    Account.prototype.deposit = function(integer) {
        this._balance += integer;
        this._record.push(new this._interactionClass(this._balance, integer))
    }

    Account.prototype.withdraw = function(integer) {
        this._balance -= integer;
        this._record.push(new this._interactionClass(this._balance, -integer));
    }

    Account.prototype.printStatement = function() {
        var statement = new this._statement(this._record);
        return statement.printStatement()
    }

    module.exports = Account
})(this)
