'use strict';
var Interaction = require('../../lib/account_interaction')
var MockDate = require('mockdate')

describe('interaction', function() {
    let interaction

    beforeEach(function() {
        MockDate.set('01/01/2020');
        interaction = new Interaction(0, 10);
    });

    it('holds the current date on creation', function() {
        expect(interaction.getDate()).toEqual(new Date())
    })

    it('holds the amount withdrawn', function() {
        expect(interaction.getAmount()).toEqual(10)
    })

    it('holds the balance post withdraw', function() {
        expect(interaction.getBalance()).toEqual(0)
    })


})