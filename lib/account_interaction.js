'use strict';

(function(exports) {

    function Interaction(balance, amount) {
        this._balance = balance;
        this._amount = amount;
        this._date = new Date()
    }

    Interaction.prototype.getDate = function() {
        return this._date
    }

    Interaction.prototype.getAmount = function() {
        return this._amount
    }

    Interaction.prototype.getBalance = function() {
        return this._balance
    }

    module.exports = Interaction
})(this)