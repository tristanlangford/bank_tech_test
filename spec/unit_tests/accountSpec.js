'use strict';
var Account = require('../../lib/account')

describe('account', function() {

    let account

    class mockInteraction {
        constructor(balance, integer) {
        }
    }

    beforeEach(function() {
        account = new Account(mockInteraction)
    })

    it('to have a stating balance at 0', function() {
        expect(account.getBalance()).toEqual(0)
    })

    it('should hold a record which is an emty array', function() {
        expect(account.getRecord()).toEqual([])
    })

    it('should store an interaction instance on deposit', function() {
        account.deposit(10);
        expect(account.getRecord()[0] instanceof mockInteraction).toBe(true)
    })

    it('should remove from balance on withdraw', function() {
        account.withdraw(1);
        expect(account.getBalance()).toEqual(-1)
    })

    it('should increase balance on deposit', function() {
        account.deposit(1);
        expect(account.getBalance()).toEqual(1)
    })

    it('should store an interaction instance on withdraw', function() {
        account.withdraw(10);
        expect(account.getRecord()[0] instanceof mockInteraction).toBe(true)
    })

})