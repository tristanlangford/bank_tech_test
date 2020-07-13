(function(exports) {

    var Bank = function() {
        this._accounts = [];
    }

    Bank.prototype.getAccounts = function() {
        return this._accounts
    }

    Bank.prototype.createAccount = function() {
        this._accounts.push(1);
    }


    module.exports = Bank
})(this)