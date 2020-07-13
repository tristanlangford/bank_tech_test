'use strict';
var Statement = require('../../lib/statement')

describe('statment', function() {
    let statement 
    
    function Withdraw() {
        Withdraw.prototype.getDate = function() {
            return new Date('2020-07-13T14:00:00.7062')
        }
        Withdraw.prototype.getAmount = function() {
            return -20
        }
        Withdraw.prototype.getBalance = function() {
            return 50
        }
    }

    function Deposit() {
        Deposit.prototype.getDate = function() {
            return new Date('2020-07-13T14:00:00.7062')
        }
        Deposit.prototype.getAmount = function() {
            return 20
        }
        Deposit.prototype.getBalance = function() {
            return 50
        }
    }

    var deposit = new Deposit();
    var withdraw = new Withdraw();

    beforeEach(function() {
        statement = new Statement([withdraw, deposit])
    })

    it('should print a bank statement', function() {
        var text = 'date || credit || debit || balance'
        expect(statement.getStatementArray()[0]).toEqual(text)
    })

    it('should format the date', function() {
        var time = new Date('2020-07-13T14:51:04.706Z')
        expect(statement.formatDate(time)).toEqual("13/07/2020")
    })

    it('should put a withdrawal as a debit on the statement', function() {
        var text = `13/07/2020 || || 20.00 || 50.00`
        statement.printWithdraw(withdraw)
        expect(statement.getStatementArray()[1]).toEqual(text)
    })

    it('should put a deposti as a credit on the statement', function() {
        var text = `13/07/2020 || 20.00 || || 50.00`
        statement.printDeposit(deposit)
        expect(statement.getStatementArray()[1]).toEqual(text)
    })

    it('pulls together a statement', function() {
        var text = 'date || credit || debit || balance\/n13/07/2020 || || 20.00 || 50.00\/n13/07/2020 || 20.00 || || 50.00';
        expect(statement.printStatement()).toEqual(text)
    })
})