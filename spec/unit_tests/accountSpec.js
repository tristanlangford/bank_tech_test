'use strict';
var Account = require('../../lib/account')

describe('account', function() {

    let account

    beforeEach(function() {
        account = new Account
    })

    it('to have a stating balance at 0', function() {
        expect(account.getBalance()).toEqual(0)
    })

    it('should hold a record which is an emty array', function() {
        expect(account.getRecord()).toEqual([])
    })

    it('should add to record on deposit', function() {
        account.deposit(1);
        expect(account.getRecord()[0]).toEqual(1)
    })

    it('should add to record on withdraw', function() {
        account.withdraw(1);
        expect(account.getRecord()[0]).toEqual(1)
    })

})