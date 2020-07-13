'use strict';
var Bank = require('../../lib/bank')

describe('bank', function() {
    let bank

    beforeEach(function() {
        bank = new Bank()
    })

    it('should have an empty array for accounts', function() {
        expect(bank.getAccounts()).toEqual([])
    })

    it('should add a new value to account array', function() {
        bank.createAccount()
        var accounts = bank.getAccounts()
        expect(accounts[0]).toEqual(1)
    })
})