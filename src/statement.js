'use strict';

(function(exports){

    function Statement(recordArray = null) {
        this._recordArray = recordArray;
        this._statementArray = ['date || credit || debit || balance']
    }

    Statement.prototype.printStatement = function() {
        var recordsForStatement = this.sortRecordsByDate(this._recordArray)
        recordsForStatement.forEach( record => {
            if(record.getAmount() < 0) {
                this.printWithdraw(record)
            } else {
                this.printDeposit(record)
            }
        });
        console.log(this._statementArray.join("\n"));
    }

    Statement.prototype.getStatementArray = function() {
        return this._statementArray
    }

    Statement.prototype.sortRecordsByDate = function(recordsArray) {
        return recordsArray.sort(sortByDate)
    }

    function sortByDate(a, b) {
        if (a.getDate() > b.getDate()) return -1;
        if (b.getDate() > a.getDate()) return 1;
      
        return 0;
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
