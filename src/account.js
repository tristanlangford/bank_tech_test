'use strict';
const Interaction = require('./account_interaction');
const Statement = require('./statement');

(function (exports) {

    function Account(interactionClass = Interaction, statementClass = Statement) {
        this._balance = 0;
        this._record = [];
        this._interactionClass = interactionClass
        this._statementClass = statementClass
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
        var statement = new this._statementClass(this._record);
        return statement.printStatement()
    }

    module.exports = Account
})(this)
