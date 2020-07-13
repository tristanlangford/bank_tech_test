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

})