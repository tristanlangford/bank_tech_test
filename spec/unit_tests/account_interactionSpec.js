'use strict';
var Interaction = require('../../lib/account_interaction')

describe('interaction', function() {
    let interaction

    beforeEach(function() {
        interaction = new Interaction(0, 10);
    });

    it('holds the current date on creation', function() {
        let today = new Date();
        expect(interaction.getDate()).toEqual(today)
    })

    it('holds the amount withdrawn', function() {
        expect(interaction.getAmount()).toEqual(10)
    })

    it('holds the balance post withdraw', function() {
        expect(interaction.getBalance()).toEqual(0)
    })


})