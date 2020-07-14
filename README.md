### Bank Tech Test

## To run 
- In terminal:
    - npm install
    - node
        - var Account = require('/lib/account')
        - var *yourAccountName* = new Account()

 ## To run tests
 - npm test

 ## Approach 
 Decided to that there are three clear classes, the account itself which holds the balance and a record of actions, an action on that account (deposit or withdrawal), and a statement class that would print the statement.
 Followed TDD process using Jasmine, starting with Account, then Account_interaction, and finally statement.
 Used Jasmine's coverage check with istanbul to check coverage.
 Considered using a seperate withdraw and deposit class, however realised they would be the same, therefore decided to have the diserning factor being a positive or negative amount that would be given based on the function called in Account.