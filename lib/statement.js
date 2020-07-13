'use strict';

(function(exports){

    var Statement = function(recordArray = null) {
        this._recordArray = recordArray;
        this._statementArray = ['date || credit || debit || balance']
    }

    Statement.prototype.printStatement = function() {
        this._recordArray.forEach( record => {
            if(record.getAmount() < 0) {
                this.printWithdraw(record)
            } else {
                this.printDeposit(record)
            }
        });
        return this._statementArray.join("/n")
    }

    Statement.prototype.getStatementArray = function() {
        return this._statementArray
    }

    Statement.prototype.formatDate = function(date) {
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        let year = date.getFullYear();
        return `${day}/${month}/${year}`
    }

    Statement.prototype.printWithdraw = function(record) {
        this._statementArray.push(`${this.formatDate(record.getDate())} || || ${(-record.getAmount()).toFixed(2)} || ${record.getBalance().toFixed(2)}`)
    }

    Statement.prototype.printDeposit = function(record) {
        this._statementArray.push(`${this.formatDate(record.getDate())} || ${(record.getAmount()).toFixed(2)} || || ${record.getBalance().toFixed(2)}`)
    }

    module.exports = Statement
})(this)