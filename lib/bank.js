(function(exports) {

    var Bank = function() {
        this._accounts = [];
    }

    Bank.prototype.getAccounts = function(){
        return this._accounts
    }


    module.exports = Bank
})(this)