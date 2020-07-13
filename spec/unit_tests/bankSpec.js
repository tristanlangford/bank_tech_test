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

    it('should create a new instance of account', function() {

    })
})